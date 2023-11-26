
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const CropperPictureMeta: ComponentMetadata = {
  group: '自定义组件',

  "componentName": "CropperPicture",
  title: '裁剪上传',
  "docUrl": "",
  category: '系统功能',

  screenshot:'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_upload.png',
  "npm": {
    "package": "eagle-custom-material-ui",
    "version": "0.1.4",
    "exportName": "CropperPicture",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    props: [
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
        name: 'disabled',
        title: '是否禁用',
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        type: 'group',
        title: '上传定义',
        display: 'block',
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
            setter: 'JsonSetter',
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
      {
        type: 'group',
        title: '裁剪设置',
        display: 'block',
        items: [
          {
            name: 'aspectRatio',
            title: '裁剪比例',
            setter: 'StringSetter',
            supportVariable: true,
            defaultValue:'9/16',
          },
          {
            name: 'Height',
            title: '高度',
            setter: 'StringSetter',
            supportVariable: true,
            defaultValue:'300px',
          },
          {
            name: 'Width',
            title: '宽度',
            setter: 'StringSetter',
            supportVariable: true,
            defaultValue:'100%',
          },
          {
            name: 'autoCropArea',
            title: '自动剪裁区域',
            setter: 'StringSetter',
            supportVariable: true,
            defaultValue:'0.8',
          },
          {
            name: 'cropBoxResizable',
            title: '裁剪大小变更',
            setter: 'BoolSetter',
            supportVariable: true,
            defaultValue:false,
          },
          {
            name: 'movable',
            title: '移动裁剪框',
            setter: 'BoolSetter',
            supportVariable: true,
            defaultValue:false,
          },
          {
            name: 'zipWidth',
            title: '压缩后宽度',
            setter: 'NumberSetter',
            supportVariable: true,
          },
        ],
      },
    ],
    "supports": {
      "style": true,
      events: [
        'beforeUpload',
        'onSuccess',
        'onError',
        'onSelect',
        'request',
        'afterSelect',
        'onChange',
        'formatter',
        'Upload.Uploader'
      ],
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    title: '裁剪上传',
    screenshot:
    'https://cdn.itq168.com/img/20221016105929.png?imageslim',
    "schema": {
      "componentName": "CropperPicture",
      "props": {
        accept:["image/jpeg", "image/jpg", "image/png"],
        zipWidth:'200'
      }
    }
  }
];

export default {
  ...CropperPictureMeta,
  snippets
};
