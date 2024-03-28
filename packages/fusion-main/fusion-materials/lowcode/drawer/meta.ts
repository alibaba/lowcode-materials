module.exports = {
  group: '原子组件',
  componentName: 'Drawer',
  title: '抽屉',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Drawer',
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
      name: 'prefix',
      title: {
        type: 'i18n',
        zh_CN: '前缀',
        en_US: 'prefix',
      },
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'width',
      title: {
        type: 'i18n',
        zh_CN: '宽度',
        en_US: 'width',
        tip: 'width|仅在 placement是 left right 的时候生效',
      },
      propType: {
        type: 'oneOfType',
        value: ['number', 'string'],
      },
      description: '宽度，仅在 placement是 left right 的时候生效',
    },
    {
      name: 'height',
      title: {
        type: 'i18n',
        zh_CN: '高度',
        en_US: 'height',
        tip: 'height|仅在 placement是 top bottom 的时候生效',
      },
      propType: {
        type: 'oneOfType',
        value: ['number', 'string'],
      },
      description: '高度，仅在 placement是 top bottom 的时候生效',
    },
    {
      name: 'placement',
      propType: {
        type: 'oneOf',
        value: ['top', 'right', 'bottom', 'left'],
      },
      description: '位于页面的位置',
      defaultValue: 'right',
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
      name: 'headerStyle',
      propType: 'object',
      description: 'header上的样式',
    },
    {
      name: 'bodyStyle',
      propType: 'object',
      description: 'body上的样式',
    },
    {
      name: 'visible',
      propType: 'bool',
      description: '是否显示',
    },
    {
      name: 'hasMask',
      propType: 'bool',
      description: '是否显示遮罩',
      defaultValue: true,
    },
    {
      name: 'onVisibleChange',
      propType: 'func',
    },
    {
      name: 'animation',
      title: {
        label: '动画',
        tip: 'animation',
      },
      propType: 'bool',
      description:
        '显示隐藏时动画的播放方式\n@property {String} in 进场动画\n@property {String} out 出场动画',
    },
    {
      name: 'closeable',
      propType: {
        type: 'oneOfType',
        value: ['string', 'bool'],
      },
      description:
        "控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：\n**close** 表示点击关闭按钮可以关闭对话框\n**mask** 表示点击遮罩区域可以关闭对话框\n**esc** 表示按下 esc 键可以关闭对话框\n如 'close' 或 'close,esc,mask'\n如果设置为 true，则以上关闭方式全部生效\n如果设置为 false，则以上关闭方式全部失效",
      defaultValue: true,
    },
    {
      name: 'onClose',
      propType: 'func',
      description:
        '对话框关闭时触发的回调函数\n@param {String} trigger 关闭触发行为的描述字符串\n@param {Object} event 关闭时事件对象',
    },
    {
      name: 'popupContainer',
      propType: 'any',
      description: '弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      isModal: true,
      rootSelector: '.next-drawer',
      nestingRule: {
        parentWhitelist: (testNode, currentNode) => {
          return testNode.componentName === 'Page';
        },
      },
    },
    props: [
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
        name: 'width',
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
            options: ['top', 'right', 'bottom', 'left'],
          },
        },
        description: '位于页面的位置',
        defaultValue: 'right',
      },
      {
        name: 'visible',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '是否显示',
            en_US: 'visible',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: visible | 说明: 是否显示',
            en_US: 'prop: visible | description: drawer visible',
          },
        },
        setter: 'BoolSetter',
        supportVariable: true,
        description: '是否显示',
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
        name: 'closeable',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '显示遮罩',
            en_US: 'closeable',
          },
          tip: {
            type: 'i18n',
            zh_CN:
              "属性: closeable | 说明: 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：\n**close** 表示点击关闭按钮可以关闭对话框\n**mask** 表示点击遮罩区域可以关闭对话框\n**esc** 表示按下 esc 键可以关闭对话框\n如 'close' 或 'close,esc,mask'\n如果设置为 true，则以上关闭方式全部生效\n如果设置为 false，则以上关闭方式全部失效",
            en_US: 'prop: closeable | description: drawer closeable',
          },
        },
        setter: {
          componentName: 'BoolSetter',
        },
        description:
          "控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：\n**close** 表示点击关闭按钮可以关闭对话框\n**mask** 表示点击遮罩区域可以关闭对话框\n**esc** 表示按下 esc 键可以关闭对话框\n如 'close' 或 'close,esc,mask'\n如果设置为 true，则以上关闭方式全部生效\n如果设置为 false，则以上关闭方式全部失效",
        defaultValue: true,
      },
    ],
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

          const dropLocation = dragment.document.canvas.dropLocation;

          if (!dropLocation) {
            // 没有 dropLocation 一般是 slot, slot 元素不用特殊处理 不做任何包裹
            return;
          }
          const dropTarget = dropLocation.target;
          const dropTargetName = dropLocation.target.componentName || '';

          // 找到要拖入进去的节点 ID
          const targetId = (dropLocation && dropLocation.target.id) || '';
          // 找到要拖入进去的节点
          let slotTarget =
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
              newNode.children.get(0).children.get(0).children.get(0).select();
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
              newNode.children.get(0).select();
            }, 1);
          };

          // 需要包裹 Block BlockCell P 的情况：
          // 1. 组件拖入到 NextPage，的直接子元素下(不包括slot), 此时Block宽度为12
          if (['NextPage'].includes(dropTargetName) && currentNode.children.has(dragment)) {
            wrapWithBlock(dragment, currentNode, dropTargetName, 12);

            // 需要包裹 Block BlockCell P 的情况：
            // 2. 组件拖入到 NextPage 的 aside slot, 的直接子元素下 （不包括slot下的进一步内容），此时Block宽度为1
          } else if (isAsideSlot && slotTarget && slotTarget.children.has(dragment)) {
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
  category: '布局容器类',
  snippets: require('./snippets'),
};
