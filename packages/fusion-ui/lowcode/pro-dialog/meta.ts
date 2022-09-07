import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { hideProp } from '../utils';
import { operationProps } from '../common';

const ProDialogMeta: ComponentMetadata = {
  componentName: 'ProDialog',
  title: '对话框',
  group: '精选组件',
  docUrl: '',
  screenshot:
    'https://img.alicdn.com/imgextra/i1/O1CN01n5JLZG1aBmYZlckSx_!!6000000003292-55-tps-56-56.svg',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.6-beta.23',
    exportName: 'ProDialog',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
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
        name: 'ref',
        condition: hideProp,
        setter: (target) => {
          if (!target?.getValue()) {
            target?.setValue(`pro-dialog-${target?.id}`);
          }
          return 'StringSetter';
        },
      },
      {
        name: 'dialogType',
        title: '弹窗类型',
        defaultValue: 'normal',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '提示弹窗',
                value: 'notice',
              },
              {
                title: '普通弹窗',
                value: 'normal',
              },
            ],
          },
        },
      },
      {
        name: 'status',
        title: '提示状态',
        condition: (target) => {
          return target.getProps().getPropValue('dialogType') === 'notice';
        },
        defaultValue: 'success',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '提醒',
                value: 'notice',
              },
              {
                title: '警告',
                value: 'warning',
              },
              {
                title: '确认',
                value: 'help',
              },
              {
                title: '成功',
                value: 'success',
              },
              {
                title: '失败',
                value: 'error',
              },
              {
                title: '加载中',
                value: 'loading',
              },
            ],
          },
        },
      },
      {
        name: 'title',
        title: '标题',
        setter: () => {
          const hasTitleSetter = AliLowCodeEngine.setters.getSetter('TitleSetter');
          return hasTitleSetter
            ? {
                componentName: 'TitleSetter',
                props: {
                  defaultChecked: true,
                },
              }
            : 'StringSetter';
        },
        defaultValue: 'Title',
      },
      {
        name: 'size',
        title: '弹窗尺寸',
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
        title: '默认显示',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'hasTips',
        title: '提示信息',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'iconType',
        title: '提示图标',
        setter: {
          componentName: 'IconSetter',
        },
        condition: (target) => {
          const showExplanation = target.getProps().getPropValue('hasTips');
          return !!showExplanation;
        },
      },
      {
        name: 'explanation',
        title: '解释文案',
        setter: {
          componentName: 'StringSetter',
        },
        condition: (target) => {
          const showExplanation = target.getProps().getPropValue('hasTips');
          return !!showExplanation;
        },
      },
      {
        name: 'hasMask',
        title: '显示遮罩',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'closeMode',
        title: '关闭方式',
        setter: {
          componentName: 'SelectSetter',
          props: {
            mode: 'tag',
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
      {
        name: 'autoFocus',
        title: '自动聚焦',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      ...operationProps,
      {
        name: 'buttons',
        title: '底部按钮配置',
        type: 'group',
        condition: hideProp,
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
                    title: 'left',
                    value: 'left',
                  },
                  {
                    title: 'center',
                    value: 'center',
                  },
                  {
                    title: 'right',
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
            (dragment.componentMeta.isModal && dragment.componentMeta.isModal())
          ) {
            console.log(
              `[${dragment.componentName}] doesn \\'n need to wrap with NextBlock > NextBlockCell`,
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

          const wrapWithBlock = (curDragMent, node, curDropTargetName, blockLen) => {
            setTimeout(() => {
              console.log(
                `[${curDragMent.componentName}] to [${curDropTargetName}] need to wrap with NextBlock > NextBlockCell > NextP [from NextPage2]`,
              );
              const newNode = node.document.createNode(layoutBlockNode(blockLen).exportSchema());
              node.insertBefore(newNode, curDragMent, false);
              curDragMent.remove(false);
              newNode.children.get(0).children.get(0).children.get(0).select();
            }, 1);
          };

          const wrapWithP = (curDragMent, node, curDropTargetName) => {
            setTimeout(() => {
              // const dragmentTarget = dropTarget;
              // 要拖入的地方如果是 NextP 那就 不再自动包裹 P了
              if (dropTargetName === 'NextP') {
                console.log(
                  `[${curDragMent.componentName}] to [${curDropTargetName}] does't need to wrap with NextP. [from NextPage3]`,
                );
                return;
              }

              console.log(
                `[${curDragMent.componentName}] to [${dropTargetName}] need to wrap with NextP [from NextPage3]`,
              );
              const newNode = node.document.createNode(Object.assign(layoutPNode.exportSchema()));
              node.insertBefore(newNode, curDragMent, false);
              curDragMent.remove(false);
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
  icon: 'https://img.alicdn.com/imgextra/i1/O1CN01n5JLZG1aBmYZlckSx_!!6000000003292-55-tps-56-56.svg',
  category: '布局容器类',
};
const snippets: Snippet[] = [
  {
    title: '高级对话框',
    screenshot:
      'https://img.alicdn.com/imgextra/i1/O1CN01n5JLZG1aBmYZlckSx_!!6000000003292-55-tps-56-56.svg',
    schema: {
      componentName: 'ProDialog',
      props: {
        status: 'success',
        size: 'medium',
        prefix: 'next-',
        footerAlign: 'right',
        title: 'Title',
        closeMode: ['esc', 'close'],
        hasMask: true,
        align: 'cc cc',
        minMargin: 40,
        isAutoContainer: true,
        visible: true,
        iconType: 'prompt',
        explanation: '提示文案',
        operationConfig: {
          align: 'right',
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

export default {
  ...ProDialogMeta,
  snippets,
};
