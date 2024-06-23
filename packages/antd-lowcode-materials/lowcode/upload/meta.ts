import snippets from './snippets';

export default {
  snippets,
  componentName: 'Upload',
  title: '上传',
  category: '表单',
  props: [
    {
      title: '基本',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'defaultFileList',
          title: {
            label: '默认上传文件',
            tip: 'defaultFileList | 默认已经上传的文件列表',
          },
          propType: { type: 'arrayOf', value: 'object' },
          setter: {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        name: 'name',
                        title: '文件名',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'status',
                        title: '状态',
                        setter: {
                          componentName: 'SelectSetter',
                          props: {
                            options: [
                              'error',
                              'success',
                              'done',
                              'uploading',
                              'removed',
                            ].map((v) => ({ label: v, value: v })),
                          },
                        },
                      },
                      {
                        name: 'url',
                        title: '下载地址',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'url',
                        title: '下载地址',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'response',
                        title: '错误信息',
                        setter: 'StringSetter',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        {
          name: 'fileList',
          title: {
            label: '当前上传文件',
            tip: 'fileList | 当前上传的文件列表（受控）',
          },
          propType: { type: 'arrayOf', value: 'object' },
          setter: {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        name: 'name',
                        title: '文件名',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'status',
                        title: '状态',
                        setter: {
                          componentName: 'SelectSetter',
                          props: {
                            options: [
                              'error',
                              'success',
                              'done',
                              'uploading',
                              'removed',
                            ].map((v) => ({ label: v, value: v })),
                          },
                        },
                      },
                      {
                        name: 'url',
                        title: '下载地址',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'url',
                        title: '下载地址',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'response',
                        title: '错误信息',
                        setter: 'StringSetter',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        {
          name: 'multiple',
          title: {
            label: '支持多选文件',
            tip: 'multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'maxCount',
          title: {
            label: '上传数量限制',
            tip: 'maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件',
          },
          propType: 'number',
          setter: 'NumberSetter',
        },
        {
          name: 'accept',
          title: {
            label: '上传文件类型',
            tip: 'accept | 接受上传的文件类型, 例如 .doc,.docx,application/msword',
          },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'directory',
          title: {
            label: '文件夹上传',
            tip: 'directory | 支持上传文件夹',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'disabled',
          title: { label: '是否禁用', tip: 'disabled | 是否为禁用状态' },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
      ],
    },
    {
      title: '高级',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'openFileDialogOnClick',
          title: {
            label: '打开文件对话框',
            tip: 'openFileDialogOnClick | 点击打开文件对话框',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'showUploadList',
          title: {
            label: '显示上传列表',
            tip: 'showUploadList | 是否显示上传的文件列表,',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'listType',
          title: {
            label: '上传列表样式',
            tip:
              'listType | 上传列表的内建样式，支持三种基本样式 `text`, `picture` 和 `picture-card`',
          },
          propType: {
            type: 'oneOf',
            value: ['text', 'picture', 'picture-card'],
          },
          defaultValue: 'text',
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '文本',
                    value: 'text',
                  },
                  {
                    title: '图片',
                    value: 'picture',
                  },
                  {
                    title: '图片卡片',
                    value: 'picture-card',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'iconRender',
          title: { label: '自定义图标', tip: 'iconRender | 自定义显示 icon' },
          propType: 'func',
          setter: {
            componentName: 'SlotSetter',
            title: '自定义图标插槽',
            initialValue: {
              type: 'JSSlot',
              params: ['file', 'listType'],
              value: [],
            },
          },
        },
        {
          name: 'itemRender',
          title: {
            label: '自定义列表项',
            tip: 'itemRender | 自定义上传列表项',
          },
          propType: 'func',
          setter: {
            componentName: 'SlotSetter',
            title: '自定义列表项插槽',
            initialValue: {
              type: 'JSSlot',
              params: ['originNode', 'file', 'fileList', 'actions'],
              value: [],
            },
          },
        },
        {
          name: 'progress',
          title: { label: '自定义进度条', tip: 'progress | 自定义进度条样式' },
          propType: 'object',
          setter: 'JsonSetter',
        },
      ],
    },
    {
      title: '上传参数',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'action',
          title: { label: '上传地址', tip: 'action | 上传的地址或方法' },
          propType: { type: 'oneOfType', value: ['string', 'func'] },
          setter: ['StringSetter', 'FunctionSetter', 'VariableSetter'],
        },
        {
          name: 'name',
          title: { label: '文件参数名', tip: 'name | 发到后台的文件参数名' },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'method',
          title: {
            label: '请求Method',
            tip: 'method | 上传请求的 http method',
          },
          propType: {
            type: 'oneOf',
            value: ['get', 'post', 'put', 'head', 'options', 'patch', 'delete'],
          },
          defaultValue: 'post',
          setter: 'StringSetter',
        },
        {
          name: 'headers',
          title: {
            label: '上传请求头',
            tip: 'headers | 设置上传的请求头部，IE10 以上有效',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'withCredentials',
          title: {
            label: '携带Cookie',
            tip: 'withCredentials | 上传请求时是否携带 cookie',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'data',
          title: {
            label: '额外参数',
            tip: 'data | 上传所需额外参数或返回上传额外参数的方法',
          },
          propType: { type: 'oneOfType', value: ['object', 'func'] },
          setter: [
            'JsonSetter',
            {
              componentName: 'FunctionSetter',
              props: {
                template: 'onData(file,${extParams}){\n// 上传所需额外参数\nreturn {};\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    {
      title: '回调函数',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'beforeUpload',
          title: {
            label: '上传前回调',
            tip: 'beforeUpload | 上传文件之前的回调函数',
          },
          propType: 'func',
          setter: {
            componentName: 'FunctionSetter',
            props: {
              template:
                'beforeUpload(file,fileList,${extParams}){\n// 上传文件之前的钩子\nreturn false;\n}',
            },
          },
        },
        {
          name: 'customRequest',
          title: {
            label: '自定义上传',
            tip: 'customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现',
          },
          propType: 'func',
          setter: {
            componentName: 'FunctionSetter',
            props: {
              template: 'customRequest(e,${extParams}){\n\n}',
            },
          },
        },
        {
          name: 'isImageUrl',
          title: {
            label: '是否为图片',
            tip: 'isImageUrl | 自定义缩略图是否使用 <img /> 标签进行显示',
          },
          propType: 'func',
          setter: {
            componentName: 'FunctionSetter',
            props: {
              template: 'isImageUrl(file,${extParams}){\n// 判断是否为图片\nreturn true;\n}',
            },
          },
        },
        {
          name: 'previewFile',
          title: {
            label: '自定义文件预览',
            tip: 'previewFile | 自定义文件预览逻辑',
          },
          propType: 'func',
          setter: 'FunctionSetter',
        },
      ],
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onChange',
          description:"上传文件改变时的回调",

          template:
            "onChange({file,fileList,event},${extParams}){\n// 上传文件改变时的回调\nconsole.log('onChange',file,fileList,event);}",
        },
        {
          name: 'onPreview',
          description:"文件链接或预览图标时的回调",

          template:
            "onPreview(file,${extParams}){\n// 点击文件链接或预览图标时的回调\nconsole.log('onPreview',file);}",
        },
        {
          name: 'onRemove',
          description:"点击移除文件时的回调",

          template:
            "onRemove(file,${extParams}){\n// 点击移除文件时的回调\nconsole.log('onRemove',file);}",
        },
        {
          name: 'onDownload',
          description:"点击下载文件时的回调",

          template:
            "onDownload(file,${extParams}){\n// 点击下载文件时的回调\nconsole.log('onDownload',file);}",
        },
      ],
    },
  },
};
