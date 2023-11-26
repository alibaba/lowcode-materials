export const commonActions = [
  {
    name: 'actionType',
    title: '操作类型',
    display: 'inline',
    editable: true,
    initialValue: 'link',
    setter: {
      componentName: 'SelectSetter',
      props: {
        options: [
          {
            value: 'formDialog',
            title: '打开表单弹窗',
          },
          {
            value: 'link',
            title: '链接',
          },
        ],
      },
    },
  },
  {
    name: 'text',
    title: '标题',
    editable: true,
    initialValue: '详情',
    display: 'inline',
    setter: {
      componentName: 'TextSetter',
    },
  },
  {
    name: 'key',
    title: '标识',
    display: 'none',
    initialValue: (currentValue, defaultValue) => {
      return currentValue || defaultValue || `data-${Math.random().toString(36).substr(-6)}`;
    },
    setter: {
      componentName: 'TextSetter',
    },
  },
  {
    name: '_redirect_url',
    title: '跳转页面',
    display: 'inline',
    accessor() {
      const _redirect = this.parent.getParam('_redirect').getValue() || {};
      return _redirect.url;
    },
    mutator(value) {
      this.parent.getParam('_redirect').setValue({
        externalLink: true,
        openType: 'current',
        url: value,
      });
    },
    setter() {
      const pages = this.node.getProp('_pages_').getValue();
      const data = pages.map((item) => {
        return {
          title: item.title.zh_CN,
          value: `/${item.navUuid}`,
        };
      });
      return {
        componentName: 'SelectSetter',
        props: {
          options: data,
        },
      };
    },
    hidden() {
      return this.parent.getParam('actionType').getValue() !== 'link';
    },
  },
  {
    name: '_redirect',
    title: '跳转页面',
    display: 'none',
    hidden: true,
  },
  {
    title: '关联弹窗',
    name: '_bindFormDialog',
    display: 'inline',
    hidden() {
      const actionType = this.parent.getParam('actionType').toData();
      return actionType !== 'formDialog';
    },
    setter() {
      // 兼容Vision低版本
      const nodeDocument = this.node.document || this.node.page;
      const { nodeList } = nodeDocument.getRootNodeVisitor('NodeCache');

      const options = nodeList
        .filter((x) => x.componentName.includes('Dialog'))
        .map((x) => ({
          title:
            x.propsData && x.propsData.title
              ? `${x.propsData.title}(${x.id})`
              : `${x.id}(${x.componentName})`,
          value: x.id,
        }));

      return {
        componentName: 'SelectSetter',
        props: {
          options,
          hasClear: true,
        },
      };
    },
  },
];
