import { hideProp } from '../utils';

import { operationProps } from '../common';

const wrapWithBlock = (dragment, node, dropTargetName, blockLen, layoutBlockNode) => {
  setTimeout(() => {
    console.log(
      `[${dragment.componentName}] to [${dropTargetName}] need to wrap with NextBlock > NextBlockCell > NextP [from NextPage2]`,
    );
    const newNode = node.document.createNode(layoutBlockNode(blockLen).exportSchema());
    node.insertBefore(newNode, dragment, false);
    dragment.remove(false);
    newNode.children.get(0).children.get(0).children.get(0).select();
  }, 1);
};

const wrapWithP = (dragment, node, dropTargetName, layoutPNode) => {
  setTimeout(() => {
    // const dragmentTarget = dropTarget;
    // 要拖入的地方如果是 NextP 那就 不再自动包裹 P了
    if (dropTargetName === 'NextP') {
      console.log(
        `[${dragment.componentName}] to [${dropTargetName}] does't need to wrap with NextP. [from NextPage3]`,
      );
      return;
    }

    console.log(
      `[${dragment.componentName}] to [${dropTargetName}] need to wrap with NextP [from NextPage3]`,
    );
    const newNode = node.document.createNode(Object.assign(layoutPNode.exportSchema()));
    node.insertBefore(newNode, dragment, false);
    dragment.remove(false);
    newNode.children.get(0).select();
  }, 1);
};

const meta = {
  componentName: 'Drawer',
  title: '抽屉',
  group: '精选组件',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.6-beta.23',
    exportName: 'ProDrawer',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  configure: {
    component: {
      isContainer: true,
      isModal: true,
      rootSelector: '.next-drawer',
      nestingRule: {
        parentWhitelist: (testNode) => {
          return testNode.componentName === 'Page';
        },
      },
    },
    props: [
      {
        name: 'ref',
        condition: hideProp,
        setter: (target) => {
          if (!target?.getValue()) {
            target?.setValue(`pro-drawer-${target?.id}`);
          }
          return 'StringSetter';
        },
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '标题',
            en_US: 'Title',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: title | 说明: 标题',
            en_US: 'prop: title | description: title',
          },
        },
        setter: {
          componentName: 'StringSetter',
        },
        description: '标题',
      },
      {
        name: 'titleTip.enable',
        title: '标题提示',
        condition: (target) => {
          console.log('title: ', target.getProps().getPropValue('title'));
          return !!target.getProps().getPropValue('title');
        },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'titleTip.content',
        condition: (target) => {
          return target.getProps().getPropValue('titleTip.enable') === true;
        },
        title: '提示内容',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'titleTip.icon',
        condition: (target) => {
          return target.getProps().getPropValue('titleTip.enable') === true;
        },
        title: '提示图标',
        setter: {
          componentName: 'IconSetter',
        },
      },
      {
        name: 'width',
        condition: hideProp,
        title: {
          label: {
            type: 'i18n',
            zh_CN: '宽度',
            en_US: 'width',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: width | 说明: 宽度',
            en_US: 'prop: width | description: 仅在 placement是 left right 的时候生效',
          },
        },
        setter: {
          componentName: 'NumberSetter',
        },
        description: '宽度，仅在 placement是 left right 的时候生效',
      },
      {
        name: 'height',
        condition: hideProp,
        title: {
          label: {
            type: 'i18n',
            zh_CN: '高度',
            en_US: 'height',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: height | 说明: 高度',
            en_US: 'prop: height | description: 仅在 placement是 top bottom 的时候生效',
          },
        },
        setter: {
          componentName: 'NumberSetter',
        },
        description: '高度，仅在 placement是 top bottom 的时候生效',
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '弹出位置',
            en_US: 'height',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: placement | 说明: 位于页面的位置',
            en_US: 'prop: placement | description: drawer placement',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '上',
                value: 'top',
              },
              {
                title: '右',
                value: 'right',
              },
              {
                title: '下',
                value: 'bottom',
              },
              {
                title: '左',
                value: 'left',
              },
            ],
          },
        },
        description: '位于页面的位置',
        defaultValue: 'right',
      },
      {
        name: 'size',
        title: '尺寸',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '大',
                value: 'large',
              },
              {
                title: '中',
                value: 'medium',
              },
              {
                title: '小',
                value: 'small',
              },
            ],
          },
        },
      },
      {
        name: 'visible',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '默认显示',
            en_US: 'visible',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: visible | 说明: 默认显示',
            en_US: 'prop: visible | description: drawer visible',
          },
        },
        setter: 'BoolSetter',
      },
      {
        name: 'hasMask',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '显示遮罩',
            en_US: 'hasMask',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: hasMask | 说明: 是否显示遮罩',
            en_US: 'prop: hasMask | description: drawer hasMask',
          },
        },
        setter: {
          componentName: 'BoolSetter',
        },
        description: '是否显示遮罩',
        defaultValue: true,
      },
      {
        name: 'closeMode',
        title: '关闭方式',
        setter: {
          componentName: 'SelectSetter',
          props: {
            mode: 'multiple',
            options: [
              {
                title: '点击按钮',
                value: 'close',
              },
              {
                title: '点击遮罩',
                value: 'mask',
              },
              {
                title: 'ESC',
                value: 'esc',
              },
            ],
          },
        },
        defaultValue: ['close'],
      },
      ...operationProps,
    ],
  },
  advanced: {
    callbacks: {
      // 与 next-page 的 onNodeAdd 一模一样
      onNodeAdd: (dragment, currentNode) => {
        // 拖入的组件为 P、Block、Slot（把NextPage拖入到面板里时，NextPage的Slot也会触发onNodeAdd事件） 时,不进行包裹
        // 拖入的组件 isModal为true时（例如drawer dialog 这类有单独组件树结构的），不进行包裹
        if (
          !dragment ||
          ['NextP', 'NextBlock', 'Slot'].includes(dragment.componentName) ||
          (dragment.componentMeta.isModal && dragment.componentMeta.isModal())
        ) {
          console.log(
            `[${dragment.componentName}] does not need to wrap with NextBlock > NextBlockCell`,
          );
          return;
        }

        const NextPProps = {
          wrap: false,
          type: 'body2',
          verAlign: 'middle',
          textSpacing: true,
          align: 'left',
        };

        if (
          [
            'Form',
            'ResponsiveGrid',
            'Box',
            'Card',
            'List',
            'Message',
            'Slider',
            'NextTable',
          ].includes(dragment.componentName) ||
          dragment.getPropValue('isFillContainer')
        ) {
          NextPProps.full = true;
        }
        const layoutPSchema = {
          componentName: 'NextP',
          title: '段落',
          props: NextPProps,
          children: [dragment.exportSchema()],
        };

        // 为目标元素包裹一层 Block
        const layoutBlockNode = (len) =>
          currentNode.document.createNode({
            componentName: 'NextBlock',
            title: '区块',
            props: {
              childTotalColumns: len || 12,
            },
            children: [
              {
                componentName: 'NextBlockCell',
                title: '子区块',
                props: {
                  isAutoContainer: true,
                  colSpan: 12,
                  rowSpan: 1,
                },
                children: [layoutPSchema],
              },
            ],
          });

        const { dropLocation } = dragment.document.canvas;

        if (!dropLocation) {
          // 没有 dropLocation 一般是 slot, slot 元素不用特殊处理 不做任何包裹
          return;
        }
        const dropTarget = dropLocation.target;
        const dropTargetName = dropLocation.target.componentName || '';

        // 找到要拖入进去的节点 ID
        const targetId = (dropLocation && dropLocation.target.id) || '';
        // 找到要拖入进去的节点
        const slotTarget =
          currentNode.slots.length > 0 && currentNode.slots.find((item) => item.id === targetId);

        const layoutPNode = currentNode.document.createNode(layoutPSchema);

        // 是否为 aside slot
        const isAsideSlot = slotTarget && ['aside'].indexOf(slotTarget._slotFor.key) > -1;
        // 是否为需要被 P 包裹的 Slot
        const isNeedPSlot =
          slotTarget && ['header', 'footer', 'nav'].indexOf(slotTarget._slotFor.key) > -1;

        // 需要包裹 Block BlockCell P 的情况：
        // 1. 组件拖入到 NextPage，的直接子元素下(不包括slot), 此时Block宽度为12
        if (['NextPage'].includes(dropTargetName) && currentNode.children.has(dragment)) {
          wrapWithBlock(dragment, currentNode, dropTargetName, 12, layoutBlockNode);

          // 需要包裹 Block BlockCell P 的情况：
          // 2. 组件拖入到 NextPage 的 aside slot, 的直接子元素下 （不包括slot下的进一步内容），此时Block宽度为1
        } else if (isAsideSlot && slotTarget && slotTarget.children.has(dragment)) {
          wrapWithBlock(dragment, slotTarget, dropTargetName, 1, layoutBlockNode);

          // 需要包裹 P 的情况：
          // 1. 如果是处于，开启了自然布局模式的容器组件中 (或者Tab里)
          // 这里的Tab主要是给纪元epoch使用的，因为他们用到了 @ali/vc-deep 的TabLayout组件，没办法在这个组件上再增加属性 isAutoContainer
        } else if (dropTarget.getPropValue('isAutoContainer') || dropTargetName === 'Tab.Item') {
          wrapWithP(dragment, dropTarget, dropTargetName, layoutPNode);

          // 需要包裹 P 的情况：
          // 2. 如果是处于，Page 的 nav header footer 中
        } else if (isNeedPSlot && slotTarget) {
          wrapWithP(dragment, slotTarget, dropTargetName, layoutPNode);
        }

        // 其他维持原状，不进行其他设置
      },
    },
  },
  icon: '',
  category: '布局容器类',
};

const snippets = [
  {
    title: '高级抽屉',
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN01PIbHBa1dxMY8m44cf_!!6000000003802-55-tps-56-56.svg',
    schema: {
      componentName: 'Drawer',
      props: {
        prefix: 'next-',
        title: '高级抽屉',
        triggerType: 'click',
        closeable: true,
        placement: 'right',
        hasMask: true,
        isAutoContainer: true,
        visible: true,
        size: 'medium',
        operationConfig: {
          align: 'right',
          fixed: true,
        },
        operations: [
          {
            action: 'ok',
            type: 'primary',
            content: '确认',
          },
          {
            action: 'cancel',
            type: 'normal',
            content: '取消',
          },
        ],
      },
    },
  },
];

export default { ...meta, snippets };
