export default {
  componentName: 'Form',
  title: '表单容器',
  category: '表单',
  props: [
    {
      name: 'values',
      title: { label: '表单数据源', tip: '表单数据源' },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'colon',
      title: { label: '展示冒号', tip: '' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'hideRequiredMark',
      title: { label: '隐藏必填标记', tip: '隐藏必填标记' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      type: 'group',
      title: '布局',
      display: 'accordion',
      items: [
        {
          name: 'labelCol',
          title: '标签栅格布局设置',
          display: 'inline',
          setter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'span',
                    title: '宽度',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                  {
                    name: 'offset',
                    title: '偏移',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                ],
              },
            },
          },
          description:
            'label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效',
        },
        {
          name: 'wrapperCol',
          title: '内容栅格布局设置',
          display: 'inline',
          setter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'span',
                    title: '宽度',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                  {
                    name: 'offset',
                    title: '偏移',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                ],
              },
            },
          },
          description:
            '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
        },
      ],
    },
    {
      name: 'labelAlign',
      title: {
        label: '标签对齐',
        tip: 'label 标签的文本对齐方式',
      },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '左',
              value: 'left',
            },
            {
              title: '右',
              value: 'right',
            },
          ],
        },
      },
      propType: { type: 'oneOf', value: ['left', 'right'] },
      defaultValue: 'right',
    },
    {
      name: 'layout',
      title: { label: '表单布局', tip: '表单布局' },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '水平',
              value: 'horizontal',
            },
            {
              title: '垂直',
              value: 'vertical',
            },
            {
              title: '行内',
              value: 'inline',
            },
          ],
        },
      },
      propType: { type: 'oneOf', value: ['horizontal', 'vertical', 'inline'] },
      defaultValue: 'horizontal',
    },
    {
      name: 'name',
      title: {
        label: '表单名称',
        tip: '表单名称，会作为表单字段 `id` 前缀使用',
      },
      propType: 'string',
    },
    {
      name: 'preserve',
      title: {
        label: '删除时保留值',
        tip: '当字段被删除时保留字段值',
      },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'scrollToFirstError',
      title: {
        label: '滚至错误',
        tip: '提交失败自动滚动到第一个错误字段',
      },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'size',
      title: {
        label: '字段组件尺寸',
        tip: '设置字段组件的尺寸（仅限 antd 组件）',
      },
      propType: { type: 'oneOf', value: ['small', 'middle', 'large'] },
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
              value: 'middle',
            },
            {
              title: '小',
              value: 'small',
            },
          ],
        },
      },
      defaultValue: 'middle',
    },
    {
      name: 'validateMessages',
      title: { label: '验证提示模板', tip: '验证提示模板' },
      setter: 'JsonSetter',
      defaultValue: { required: "'${name}' 不能为空" },
    },
    {
      name: 'validateTrigger',
      title: { label: '校验时机', tip: '所有字段校验触发时机' },
      propType: {
        type: 'oneOf',
        value: ['onChange', 'onBlur'],
      },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '当前值变化时',
              value: 'onChange',
            },
            {
              title: '失去焦点时',
              value: 'onBlur',
            },
          ],
        },
      },
    },
    {
      name: 'onFinish',
      title: {
        label: '提交表单且数据验证成功后回调事件',
        tip: '提交表单且数据验证成功后回调事件',
      },
      propType: 'func',
    },
    {
      name: 'onFinishFailed',
      title: {
        label: '提交表单且数据验证失败后回调事件',
        tip: '提交表单且数据验证失败后回调事件',
      },
      propType: 'func',
    },
    {
      name: 'onFieldsChange',
      title: { label: '字段更新时触发回调事件', tip: '字段更新时触发回调事件' },
      propType: 'func',
    },
    {
      name: 'onValuesChange',
      title: {
        label: '字段值更新时触发回调事件',
        tip: '字段值更新时触发回调事件',
      },
      propType: 'func',
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      style: true,
      events: [
        {
          name: 'onFinish',
          template:
            "onFinish(values,${extParams}){\n// 提交表单且数据验证成功后回调事件\nconsole.log('onFinish',values);}",
        },
        {
          name: 'onFinishFailed',
          template:
            "onFinishFailed({values,errorFields,outOfDate},${extParams}){\n// 提交表单且数据验证失败后回调事件\nconsole.log('onFinishFailed',values, errorFields, outOfDate);}",
        },
        {
          name: 'onFieldsChange',
          template:
            "onFieldsChange(changedFields,allFields,${extParams}){\n// 字段更新时触发回调事件\nconsole.log('onFieldsChange',changedFields,allFields);}",
        },
        {
          name: 'onValuesChange',
          template:
            "onValuesChange(changedValues,allValues,${extParams}){\n// 字段值更新时触发回调事件\nconsole.log('onValuesChange',changedValues,allValues);}",
        },
      ],
    },
  },
  experimental: {
    callbacks: {
      onNodeAdd: (dragment, currentNode) => {
        // 拖入的内容为LayoutP时,不做包裹动作

        const comps = [
          'Input',
          'Select',
          'Radio',
          'Checkbox',
          'Switch',
          'Upload',
          'Datepicker',
          'Rate',
          'Transfer',
        ];

        if (
          !dragment ||
          !dragment.componentMeta ||
          !dragment.componentMeta.npm ||
          !dragment.componentMeta.npm.package ||
          dragment.componentMeta.npm.package.indexOf('@ali/antd-lowcode') ===
            -1 ||
          comps.every(comp => dragment.componentName.indexOf(comp) === -1)
        ) {
          return;
        }

        // 为目标元素包裹一层P
        const layoutPNode = currentNode.document.createNode({
          componentName: 'Form.Item',
          props: {
            label: '表单项: ',
          },
          children: [dragment.schema],
        });
        // 当前dragment还未添加入node子节点,需要setTimeout处理
        setTimeout(() => {
          currentNode.replaceChild(
            dragment,
            layoutPNode.schema,
            // 避免生成新的 nodeId
            { reserveSchemaNodeId: true },
          );
        }, 1);
      },
    },
  },
};
