
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const editorComponentMeta: IPublicTypeComponentMetadata = {
  "componentName": "editorComponent",
  title: '富文本编辑器',
  docUrl: '',
  screenshot: '',
  group: '高级组件',
  category: '编辑器',
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/wangeditor",
    "version": "0.1.4",
    "exportName": "editorComponent",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  configure: {
    props: [
      {
        title: '默认值',
        name: 'value',
        supportVariable: true,

        setter: {
          componentName: 'StringSetter',
        },
      },

      {
        title: '模式',
        name: 'mode',
        supportVariable: true,

        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '默认',
                value: 'default',
              },
              {
                label: '简约',
                value: 'simple',
              }
            ],
          },
        },
      },

      {
        title: '工具样式',
        name: 'ToolBarStyle',

        type: 'group',
        extraProps: {
          display: 'entry'
        },
        items: [
          {
            name: 'ToolBarStyle',
            title: {
              label: '工具样式',
            },
            setter: 'StyleSetter',
            extraProps: {
              display: 'block'
            }
          },
        ]
      },
      {
        title: '内容外部样式',
        type: 'group',
        name: 'ContentStyle',

        extraProps: {
          display: 'entry'
        },
        items: [
          {
            name: 'ContentStyle',
            title: {
              label: '内容外部样式',
            },
            setter: 'StyleSetter',
            extraProps: {
              display: 'block'
            }
          }
        ]
      },


      {
        name: 'toolbarConfig',
        title: { label: '工具栏配置', tip: '工具提示' },
        supportVariable: true,
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'toolbarKeys',
                    title: { label: '重配工具栏', tip: '重新配置工具栏，显示哪些菜单，以及菜单的排序、分组。' },
                    setter: 'JsonSetter',
                  },
                  {
                    name: 'insertKeys',
                    title: { label: '自定义菜单', tip: '自定义菜单' },
                    setter: 'JsonSetter',
                  },
                  {
                    name: 'excludeKeys',
                    title: { label: '排除的菜单', tip: '排除的菜单' },
                    setter: 'JsonSetter',
                  },
                ],
              },
            },
          },
        ]
      },
      {
        name: 'editorConfig',
        title: { label: '编辑器配置', tip: '编辑器配置' },
        supportVariable: true,
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'placeholder',
                    title: { label: '默认的内容', tip: '默认的内容' },
                    setter: 'StringSetter',
                  },
                  {
                    name: 'readOnly',
                    title: { label: '只读', tip: '默认的内容' },
                    setter: 'BoolSetter',
                  },
                  {
                    name: 'scroll',
                    title: { label: '支持滚动', tip: '支持滚动' },
                    setter: 'BoolSetter',
                  },
                  {
                    name: 'autoFocus',
                    title: { label: '自定聚焦', tip: '自定聚焦' },
                    setter: 'BoolSetter',
                  },
                  {
                    name: 'hoverbarKeys',
                    title: { label: '编辑器菜单', tip: '配置编辑器的 hoverbar 菜单。通过 editor.getConfig().hoverbarKeys 可查看当前的 hoverbarKeys                    ' },
                    setter: 'JsonSetter',
                  },

                  {
                    name: 'MENU_CONF',
                    title: { label: '菜单配置', tip: '菜单配置' },
                    setter: [
                      {
                        componentName: 'ObjectSetter',
                        props: {
                          config: {
                            items: [
                              {
                                title: '上传默认文件',
                                name: 'uploadImage.fieldName',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'StringSetter',
                                },
                              },
                              {
                                title: '上传地址',
                                name: 'uploadImage.server',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'StringSetter',
                                },
                              },
                              {
                                title: '上传大小',
                                name: 'uploadImage.maxFileSize',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'NumberSetter',
                                },
                              },
                              {
                                title: '上传数量',
                                name: 'uploadImage.maxNumberOfFiles',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'NumberSetter',
                                },
                              },
                              {
                                title: '传递参数',
                                name: 'uploadImage.meta',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'JsonSetter',
                                },
                              },
                              {
                                title: '拼接url',
                                name: 'uploadImage.metaWithUrl',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'BoolSetter',
                                },
                              },
                              {
                                title: '拼接url',
                                name: 'uploadImage.headers',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'JsonSetter',
                                },
                              },
                              {
                                title: '传递cookie',
                                name: 'uploadImage.withCredentials',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'BoolSetter',
                                },
                              },
                              {
                                title: '超时时间',
                                name: 'uploadImage.timeout',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'NumberSetter',
                                },
                              },
                              {
                                title: '转base大小',
                                name: 'uploadImage.base64LimitSize',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'NumberSetter',
                                },
                              },
                              {
                                title: '上传前',
                                name: 'uploadImage.onBeforeUpload',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'FunctionSetter',
                                },
                              },
                              {
                                title: '进度回调',
                                name: 'uploadImage.onProgress',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'FunctionSetter',
                                },
                              },
                              {
                                title: '上传成功',
                                name: 'uploadImage.onSuccess',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'FunctionSetter',
                                },
                              },
                              {
                                title: '单个失败',
                                name: 'uploadImage.onFailed',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'FunctionSetter',
                                },
                              },
                              {
                                title: '上传错误',
                                name: 'uploadImage.onError',
                                supportVariable: true,
                    
                                setter: {
                                  componentName: 'FunctionSetter',
                                },
                              },
                            ],
                          },
                        },
                      },
                    ]
                  },

                ],
              },
            },
          },
        ]
      },


    ],
    supports: {
      style: true,
      events: [
    {
      name: 'saveField',
      description:'编辑器内容、选区变化时的回调函数',
      template:
      'saveField(ref,${extParams}){\n    \nreturn }'
    },
    {
      name: 'onChange',
      description:'编辑器内容、选区变化时的回调函数。',
      template:
      'onChange(editor,${extParams}){\n  }'

    },
    {
      name: 'onDestroyed',
      description:'编辑器销毁时的回调函数。',
      template:
      'onDestroyed(editor,${extParams}){\n  }'

    },

 
        'onFocus',
        'onBlur',
        {
          name: 'customPaste',
          description:'自定义粘贴。',
          template:
          'customPaste(editor,event,${extParams}){\n \\自定义粘贴。可阻止编辑器的默认粘贴，实现自己的粘贴逻辑。  }'
        },
        {
          name: 'customAlert',
          description:'自定义编辑器 alert',
          template:
          'customPaste(s,t,${extParams}){\n   }'
        },

        'onBeforeUpload',
      ],
      className: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '富文本编辑器',
    screenshot: 'https://cdn.appthen.cn/editor/assets/appthen-wangeditor.svg',
    schema: {
      componentName: 'editorComponent',
      props: {
        "ToolBarStyle": {
          "borderWidth": "1px",
          "borderColor": "#e7e7e7",
          "borderStyle": "solid"
        },
        mode:"default",
        value: '<><p>appthen低代码</p></>',

        editorConfig:{
          MENU_CONF:{
              uploadImage:{
                'fieldName': 'file',
                'server': '/api/upload2-image',
                'maxFileSize': 1 * 1024 * 1024, // 1M
                // allowedFileTypes: ['image/*'],
                // 最多可上传几个文件，默认为 100
                'maxNumberOfFiles': 10,
                'meta': {},
                'metaWithUrl': false,
                // 自定义增加 http  header
                'headers': {},
                // 跨域是否传递 cookie ，默认为 false
                'withCredentials': true,
                // 超时时间，默认为 10 秒
                'timeout': 5 * 1000, // 5 秒
              }
            
       
          }
        }
       ,
        style:{
          height:'600px',
        }
      },
    },
  },
];

export default {
  ...editorComponentMeta,
  snippets
};
