import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const uploadCustomMeta: ComponentMetadata = {
  group: '自定义组件',
  componentName: 'uploadCustom',
  title: '上传',
  docUrl: '',
  screenshot:'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_upload.png',
  category: '系统功能',

  npm: {
    package: 'eagle-custom-material-ui',
    version: '0.1.0',
    exportName: 'uploadCustom',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
    // {
    //   name: 'action',
    //   propType: 'string',
    //   description: '上传的地址',
    // },
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
      title: "数据格式化函数",
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
      name: 'accept',
      propType: 'string',
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
    props: [
      {
        name: 'title',
        title: '标题',
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'value',
        title: '当前值',
        supportVariable: true,
        setter: {
          componentName: 'JsonSetter',
        },
      },
      {
        name: 'defaultValue',
        title: '默认值',
        supportVariable: true,

        setter: {
          componentName: 'JsonSetter',
        },
      },
      {
        name: 'shape',
        title: '按钮形状',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '默认',
                value: null,
              },
              {
                title: '卡片',
                value: 'card',
              },
              {
                title: '拖拽',
                value: 'Dragger',
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
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: '是否禁用',
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        type: 'group',
        title: '上传定义',
        display: 'accordion',
        items: [
          {
            name: 'action',
            title: '上传的地址',
            setter: 'StringSetter',
            defaultValue:'/api/system/file/',
            supportVariable: true,
          },
          {
            name: 'accept',
            title: '文件类型',
            setter: 'StringSetter',
            supportVariable: true,
          },
          {
            name: 'data',
            title: '上传的额外传参数',
            setter: 'JsonSetter',
            supportVariable: true,
          },
          // {
          //   name: 'headers',
          //   title: 'header头文件',
          //   setter: 'JsonSetter',
          //   supportVariable: true,
          // },
          {
            name: 'timeout',
            title: '超时时间',
            setter: 'NumberSetter',
            supportVariable: true,
          },
          {
            name: 'headers',
            title: 'header',
            setter: 'JsonSetter',
            supportVariable: true,
          },
          {
            name: 'method',
            title: '方法',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    label: 'post',
                    value: 'post',
                  },
                  {
                    label: 'put',
                    value: 'put',
                  },
                ],
              },
            },

            supportVariable: true,
          },
        ],
      },
      {
        type: 'group',
        title: '拖拽上传',
        display: 'accordion',
        items: [
          {
            title: '禁用上传',
            name: 'disabled',
            setter: 'BoolSetter',
          },
          {
            title: '多选文件支持',
            name: 'multiple',
            setter: 'BoolSetter',
          },
          {
            title: '文件夹支持',
            name: 'webkitdirectory',
            setter: 'BoolSetter',
          },
          {
            title: '拖拽上传',
            name: 'dragable',
            setter: 'BoolSetter',
          },
          {
            title: '支持的文件类型',
            name: 'accept',
            setter: 'StringSetter',
          },
          {
            title: '设备媒体',
            name: 'capture',
            setter: 'StringSetter',
          },
        ],
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
            supportVariable: true,
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
            supportVariable: true,
          },
        ],
      },

    ],
    supports: {
      style: true,
      events: [
        'beforeUpload',
        'onSuccess',
        'onError',
        'onSelect',
        'request',
        'afterSelect',
        'onChange',
        'formatter',
        'onSelect', 'onDragOver', 'onDragLeave', 'onDrop',
      ],
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '上传组件',
    screenshot:
    'https://cdn.itq168.com/img/文件上传.svg?imageslim',
    schema: {
      componentName: 'uploadCustom',
      props: {
        prefix: 'next-',
        closable: true,
        autoUpload: true,
        shape:'card',
        title:'上传文件',
        defaultValue: [],
      },
    },
  },
];

export default {
  ...uploadCustomMeta,
  snippets,
};
