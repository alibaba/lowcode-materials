import { wrapFormItemProps } from '../utils/form-utils';

export default {
  componentName: 'FormUpload',
  isFormItemComponent: true,
  title: '上传',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'FormUpload',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'action',
      propType: 'string',
      description: '上传的地址',
    },
    {
      name: 'value',
      propType: {
        type: 'Json',
      },
      description: '文件列表',
    },
    {
      name: 'defaultValue',
      propType: 'object',
      description: '默认文件列表',
    },
    {
      name: 'shape',
      propType: {
        type: 'oneOf',
        value: ['card'],
      },
      description: '上传按钮形状',
    },
    {
      name: 'listType',
      propType: {
        type: 'oneOf',
        value: ['text', 'image', 'card'],
      },
      description: '上传列表的样式',
    },
    {
      name: 'name',
      propType: 'string',
      description: '文件名字段',
    },
    {
      name: 'data',
      propType: {
        type: 'oneOfType',
        value: ['object', 'func'],
      },
      description: '上传额外传参',
    },
    {
      name: 'formatter',
      propType: 'func',
      title: {
        label: '数据格式化函数',
        tip: '数据格式化函数，配合自定义 action 使用，参数为服务器的响应数据，详见 [formatter](#formater)\n@param {Object} response 返回\n@param {File} file 文件对象',
      },
    },
    {
      name: 'limit',
      propType: 'number',
      description: '最大文件上传个数',
      defaultValue: null,
    },
    {
      name: 'timeout',
      propType: 'number',
      description: '设置上传超时,单位ms',
    },
    {
      name: 'dragable',
      propType: 'bool',
      description: '可选参数，是否支持拖拽上传，`ie10+` 支持。',
    },
    {
      name: 'useDataURL',
      propType: 'bool',
      description: '可选参数，是否本地预览',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '可选参数，是否禁用上传功能',
    },
    {
      name: 'onSelect',
      propType: 'func',
      description: '选择文件回调',
    },
    {
      name: 'onProgress',
      propType: 'func',
      description: '上传中',
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '上传文件改变时的状态\n@param {Object} info 文件事件对象',
    },
    {
      name: 'onSuccess',
      propType: 'func',
      description:
        '可选参数，上传成功回调函数，参数为请求下响应信息以及文件\n@param {Object} file 文件\n@param {Array<Object>} value 值',
    },
    {
      name: 'afterSelect',
      propType: 'func',
      description:
        '可选参数, 用于校验文件,afterSelect仅在 autoUpload=false 的时候生效,autoUpload=true时,可以使用beforeUpload完全可以替代该功能.\n@param {Object} file\n@returns {Boolean} 返回false会阻止上传,其他则表示正常',
    },
    {
      name: 'onRemove',
      propType: 'func',
      description:
        '移除文件回调函数\n@param {Object} file 文件\n@returns {Boolean|Promise} 返回 false、Promise.resolve(false)、 Promise.reject() 将阻止文件删除',
    },
    {
      name: 'onError',
      propType: 'func',
      description:
        '可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件\n@param {Object} file 出错的文件\n@param {Array} value 当前值',
    },
    {
      name: 'beforeUpload',
      propType: 'func',
      title: {
        label: '开始上传时回调',
        tip: '可选参数, 详见 [beforeUpload](#beforeUpload)\n@param {Object} file 所有文件\n@param {Object} options 参数\n@returns {Boolean|Object|Promise} 返回值作用见demo',
      },
    },
    {
      name: 'onDrop',
      propType: 'func',
      description: '放文件',
    },
    {
      name: 'className',
      propType: 'string',
      description: '自定义class',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内联样式',
    },
    {
      name: 'autoUpload',
      propType: 'bool',
      description: '自动上传',
      defaultValue: true,
    },
    {
      name: 'request',
      propType: 'func',
      description:
        '自定义上传方法\n@param {Object} option\n@return {Object} object with abort method',
    },
    {
      name: 'progressProps',
      propType: 'object',
      description: '透传给Progress props',
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否为预览态',
    },
    {
      name: 'renderPreview',
      propType: 'func',
      description: '预览态模式下渲染的内容\n@param {number} value 评分值',
    },
  ],
  configure: {
    props: wrapFormItemProps([
      {
        name: 'defaultValue',
        title: '默认值',
        setter: {
          componentName: 'JsonSetter',
        },
      },
      {
        name: 'shape',
        title: '按钮形状',
        defaultValue: '',
        setValue: (target, value) => {
          const { node } = target;
          if (value === 'card') {
            node.removeChild(node.children.get(0));
          } else {
            node.children?.importSchema({
              componentName: 'Button',
              props: {
                children: '上传文件',
                type: 'primary',
              },
            });
          }
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '默认',
                value: '',
              },
              {
                title: '卡片',
                value: 'card',
              },
            ],
          },
        },
        description: '上传按钮形状',
      },
      {
        name: 'listType',
        title: '列表样式',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['text', 'image', 'card'],
          },
        },
        defaultValue: 'text',
        description: '上传列表的样式',
      },
      {
        name: 'limit',
        title: '数量限制',
        setter: 'NumberSetter',
      },
      {
        name: 'disabled',
        title: '是否禁用',
        setter: 'BoolSetter',
      },
      {
        type: 'group',
        title: '高级',
        display: 'block',
        items: [
          {
            name: 'id',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '唯一标识',
                en_US: 'ID',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: id | 说明: 唯一标识',
                en_US: 'prop: id | description: switch id',
              },
            },
            setter: 'StringSetter',
          },
          {
            name: 'name',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '表单标识',
                en_US: 'Name',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: name | 说明: 表单标识',
                en_US: 'prop: name | description: switch name',
              },
            },
            setter: 'StringSetter',
          },
        ],
      },
    ]),
  },
  advanced: {
    initialChildren: [
      {
        componentName: 'Button',
        props: {
          children: '上传文件',
          type: 'primary',
        },
      },
    ],
    initials: [
      {
        name: 'shape',
        initial: () => '',
      },
    ],
  },
  icon: '',
  category: '内容',
};
