import snippets from './snippets.design';

export default {
  group: '原子组件',
  componentName: 'Dialog',
  title: '对话框',
  docUrl: '',
  screenshot: '',
  keywords: ['弹窗', '模态'],
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Dialog',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'id',
      propType: 'string',
    },
    {
      name: 'visible',
      propType: {
        type: 'oneOfType',
        value: ['JSExpression', 'bool'],
      },
      description: '是否显示',
      defaultValue: false,
    },
    {
      name: 'title',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
      description: '标题',
    },
    {
      name: 'children',
      propType: {
        type: 'oneOfType',
        value: [
          'bool',
          {
            type: 'instanceOf',
            value: 'node',
          },
        ],
      },
      description: '内容',
    },
    {
      name: 'footer',
      propType: {
        type: 'oneOfType',
        value: ['bool'],
      },
      description: '底部按钮',
    },
    {
      name: 'footerAlign',
      propType: {
        type: 'oneOf',
        value: ['left', 'center', 'right'],
      },
      description: '操作对齐方式',
      defaultValue: 'right',
    },
    {
      name: 'closeable',
      propType: {
        type: 'oneOf',
        value: ['close', 'mask', 'esc,close', 'close,esc,mask', 'esc'],
      },
      description: '关闭方式',
      defaultValue: 'esc,close',
    },
    {
      name: 'onClose',
      propType: 'func',
      description:
        '对话框关闭时触发的回调函数\n@param {String} trigger 关闭触发行为的描述字符串\n@param {Object} event 关闭时事件对象',
    },
    {
      name: 'hasMask',
      propType: 'bool',
      description: '是否显示遮罩',
      defaultValue: true,
    },
    {
      name: 'animation',
      propType: {
        type: 'oneOfType',
        value: ['object', 'bool'],
      },
      description:
        '显示隐藏时动画的播放方式\n@property {String} in 进场动画\n@property {String} out 出场动画',
    },
    {
      name: 'autoFocus',
      propType: 'bool',
      description: '是否获得焦点',
      defaultValue: false,
    },
    {
      name: 'isFullScreen',
      propType: 'bool',
      description: '是否全屏',
      defaultValue: false,
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      isModal: true,
      rootSelector: 'div.next-dialog',
      nestingRule: {
        parentWhitelist: ['Page'],
      },
    },
    props: [
      {
        name: 'title',
        title: '标题',
        setter: 'StringSetter',
        initialValue: '标题',
      },
      {
        name: 'visible',
        title: '是否显示',
        setter: 'BoolSetter',
        initialValue: false,
      },
      {
        name: 'hasMask',
        title: '显示遮罩',
        setter: 'BoolSetter',
        initialValue: true,
      },
      {
        name: 'closeMode',
        title: '关闭方式',
        setter: {
          componentName: 'SelectSetter',
          mutiple: true,
          props: {
            options: [
              {
                title: '关闭按钮',
                value: 'close',
              },
              {
                title: '遮罩',
                value: 'mask',
              },
              {
                title: 'ESC',
                value: 'esc',
              },
            ],
          },
        },
        initialValue: ['esc', 'close'],
      },
      {
        name: 'autoFocus',
        title: '自动聚焦',
        setter: 'BoolSetter',
        initialValue: false,
      },
      {
        name: 'buttons',
        title: '底部按钮配置',
        type: 'group',
        extraProps: {
          display: 'block',
        },
        items: [
          {
            name: 'footer',
            title: '是否显示',
            setter: 'BoolSetter',
            initialValue: true,
          },
          {
            name: 'footerAlign',
            title: '对齐方式',
            initialValue: 'right',
            condition: (target) => {
              return target.getProps().getPropValue('footer');
            },
            setter: {
              componentName: 'RadioGroupSetter',
              initialValue: 'right',
              props: {
                options: [
                  {
                    title: '左',
                    value: 'left',
                  },
                  {
                    title: '中',
                    value: 'center',
                  },
                  {
                    title: '右',
                    value: 'right',
                  },
                ],
              },
            },
          },
          {
            name: 'footerActions',
            title: '排列方式',
            initialValue: ['ok', 'cancel'],
            condition: (target) => {
              return target.getProps().getPropValue('footer');
            },
            setter: {
              componentName: 'SelectSetter',
              initialValue: ['ok', 'cancel'],
              props: {
                options: [
                  {
                    title: 'ok, cancel',
                    value: ['ok', 'cancel'],
                  },
                  {
                    title: 'cancel, ok',
                    value: ['cancel', 'ok'],
                  },
                  {
                    title: 'cancel',
                    value: ['cancel'],
                  },
                  {
                    title: 'ok',
                    value: ['ok'],
                  },
                ],
              },
            },
          },
        ],
      },
    ],
    supports: {
      events: ['onOk', 'onCancel', 'onClose'],
      style: true,
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
            (dragment.isModal && dragment.isModal())
          ) {
            console.log(
              `[${dragment.componentName}] doesn\'n need to wrap with NextBlock > NextBlockCell`,
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

          const { dropLocation } = dragment.document.designer;

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

          const wrapWithBlock = (dragment, node, dropTargetName, blockLen) => {
            setTimeout(() => {
              console.log(
                `[${dragment.componentName}] to [${dropTargetName}] need to wrap with NextBlock > NextBlockCell > NextP [from NextPage2]`,
              );
              const newNode = node.document.createNode(layoutBlockNode(blockLen).exportSchema());
              node.insertBefore(newNode, dragment, false);
              dragment.remove(false);
              newNode
                .getChildren()
                .get(0)
                .getChildren()
                .get(0)
                .getChildren()
                .get(0)
                .select();
            }, 1);
          };

          const wrapWithP = (dragment, node, dropTargetName) => {
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
              newNode
                .getChildren()
                .get(0)
                .select();
            }, 1);
          };

          // 需要包裹 Block BlockCell P 的情况：
          // 1. 组件拖入到 NextPage，的直接子元素下(不包括slot), 此时Block宽度为12
          if (['NextPage'].includes(dropTargetName) && currentNode.getChildren().has(dragment)) {
            wrapWithBlock(dragment, currentNode, dropTargetName, 12);

            // 需要包裹 Block BlockCell P 的情况：
            // 2. 组件拖入到 NextPage 的 aside slot, 的直接子元素下 （不包括slot下的进一步内容），此时Block宽度为1
          } else if (isAsideSlot && slotTarget && slotTarget.getChildren().has(dragment)) {
            wrapWithBlock(dragment, slotTarget, dropTargetName, 1);

            // 需要包裹 P 的情况：
            // 1. 如果是处于，开启了自然布局模式的容器组件中 (或者Tab里)
            // 这里的Tab主要是给纪元epoch使用的，因为他们用到了 @ali/vc-deep 的TabLayout组件，没办法在这个组件上再增加属性 isAutoContainer
          } else if (dropTarget.getPropValue('isAutoContainer') || dropTargetName === 'Tab.Item') {
            wrapWithP(dragment, dropTarget, dropTargetName);

            // 需要包裹 P 的情况：
            // 2. 如果是处于，Page 的 nav header footer 中
          } else if (isNeedPSlot && slotTarget) {
            wrapWithP(dragment, slotTarget, dropTargetName);
          }

          // 其他维持原状，不进行其他设置
        },
      },
    },
  },
  icon: '',
  category: '信息反馈',
  snippets,
};
