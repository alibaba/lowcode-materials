
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AppthenXgplayerMeta: IPublicTypeComponentMetadata = {
  "componentName": "AppthenXgplayer",
  "title": "AppthenXgplayer",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  group: '高级组件',
  category: '播放器',
  "npm": {
    "package": "@appthen/xgplayer",
    "version": "0.1.0",
    "exportName": "default",
    "main": "src/index.tsx",
    "destructuring": false,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "url",
            "zh-CN": "视频地址"
          }
        },
        "name": "url",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      }, {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "poster",
            "zh-CN": "封面"
          }
        },
        "name": "poster",
        "setter": {
          "componentName": "StringSetter",

        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "width",
            "zh-CN": "宽度"
          }
        },
        "name": "width",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "height",
            "zh-CN": "高度"
          }
        },
        "name": "height",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "maxBufferLength",
            "zh-CN": "缓冲长度"
          }
        },
        "name": "maxBufferLength",
        "setter": {
          "componentName": "NumberSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fluid",
            "zh-CN": "流式布局"
          }
        },
        "name": "fluid",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": true,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fitVideoSize",
            "zh-CN": "内容宽高"
          }
        },
        "name": "fitVideoSize",
        "setter": {
          "componentName": "SelectSetter",
          props: {
            options: [
              { label: '固定宽度', value: 'fixWidth' },
              { label: '固定高度', value: 'fixHeight' },
              { label: '自动宽高', value: 'auto' },
            ]
          }
          ,
          "isRequired": true,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "volume",
            "zh-CN": "音量"
          }
        },
        "name": "volume",
        "setter": {
          "componentName": "StringSetter",

          "initialValue": '1'
        }
      }, {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "autoplay",
            "zh-CN": "自动播放"
          }
        },
        "name": "autoplay",
        "setter": {
          "componentName": "BoolSetter",
        }
      }, {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "loop",
            "zh-CN": "循环播放"
          }
        },
        "name": "loop",
        "setter": {
          "componentName": "BoolSetter",

          "initialValue": false
        }
      }, {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "videoInit",
            "zh-CN": "视频初始化"
          }
        },
        "name": "videoInit",
        "setter": {
          "componentName": "BoolSetter",

          "initialValue": true
        }
      }, {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "playbackRate",
            "zh-CN": "播放速度"
          }
        },
        "name": "playbackRate",
        "setter": {
          "componentName": "JsonSetter",

          "initialValue": [0.5, 0.75, 1, 1.5, 2]
        }
      }, {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultPlaybackRate",
            "zh-CN": "默认播放速度"
          }
        },
        "name": "defaultPlaybackRate",
        "setter": {
          "componentName": "StringSetter",

          "initialValue": 1
        }
      }, {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "danmu",
            "zh-CN": "弹幕管理"
          }
        },
        "name": "danmu",
        "setter": {
          "componentName": "JsonSetter",
        }
      },
      
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "lastPlayTime",
            "zh-CN": "视频起播时间"
          }
        },
        "name": "lastPlayTime",
        "setter": {
          "componentName": "NumberSetter",
        }
      }, {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "lastPlayTimeHideDelay",
            "zh-CN": "提示文字时长"
          }
        },
        "name": "lastPlayTimeHideDelay",
        "setter": {
          "componentName": "NumberSetter",
        }
      },
       {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rotate",
            "zh-CN": "旋转"
          }
        },
        "name": "rotate",
        "setter": {
          "componentName": "ObjectSetter",
          props: {
            config: {
              items: [
                {
                  name: 'innerRotate',
                  title: { label: '内部旋转', tip: '只旋转内部video' },
                  propType: 'bool',

                  setter: 'BoolSetter',
                }, {
                  name: 'clockwise',
                  title: { label: '顺时针', tip: '旋转方向是否为顺时针' },
                  propType: 'bool',

                  setter: 'BoolSetter',
                },
              ],
            },
          },
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rotateFullscreen",
            "zh-CN": "自动横屏"
          }
        },
        "name": "rotateFullscreen",
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "download",
            "zh-CN": "开启下载"
          }
        },
        "name": "download",
        "setter": {
          "componentName": "BoolSetter",
        }
      }, {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "pip",
            "zh-CN": "画中画"
          }
        },
        "name": "pip",
        "setter": {
          "componentName": "BoolSetter",
        }
      }
      , {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "miniplayer",
            "zh-CN": "开启mini播放"
          }
        },
        "name": "miniplayer",
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "miniplayerConfig",
            "zh-CN": "mini播放配置"
          }
        },
        "name": "miniplayerConfig",
        "setter": {
          "componentName": "ObjectSetter",
          props: {
            config: {
              items: [
                {
                  name: 'bottom',
                  title: { label: '底部', tip: '距离底部位置' },

                  setter: 'StringSetter',
                },
                {
                  name: 'right',

                  title: { label: '右边', tip: '距离右边位置' },
                  setter: 'StringSetter',
                },
                {
                  name: 'width',

                  title: { label: '宽度', tip: '宽度' },
                  setter: 'StringSetter',
                },
                {
                  name: 'height',

                  title: { label: '高度', tip: '高度' },
                  setter: 'StringSetter',
                },
              ],
            },
          },
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "cssFullscreen",
            "zh-CN": "网页全屏 "
          }
        },
        "name": "cssFullscreen",
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "playNext",
            "zh-CN": "视频列表"
          }
        },
        "name": "playNext",
        "setter": {
          "componentName": "ObjectSetter",
          props: {
            config: {
              items: [
                {
                  name: 'urlList',
                  title: { label: '视频列表', tip: '自动下一集列表' },
    
                  setter: 'JsonSetter',
                  
                }
              ],
            },
          },
        }
      },
    ],
    "supports": {
      "style": true,
      events: [
        {
          name:'saveField',
          description:'获取播放器实例',
          template:'function (player) {\n  console.log(player);\n}'
        }
      ]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "西瓜播放器",
    "screenshot": "https://s3.cn-east-1.qiniucs.com/807y2g/qiniuyun/xgplayer.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ze6ie7tb2Y8Rczh6ao-ZPzB9HLWyKBX06Tw02twr%2F20240430%2Fcn-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240430T131357Z&X-Amz-Expires=599&X-Amz-Signature=4b0a534b21dbbd3c2142c58fc8f455a98134f8ea34ed7a31eb77d60819b7faaa&X-Amz-SignedHeaders=host",
    "schema": {
      "componentName": "AppthenXgplayer",
      "props": {
        width:'100%',
        height:'600px',
        maxBufferLength: 10,
        rotateFullscreen:false,
        fluid:false,
        url:"//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4",
        miniplayer: true,
        miniplayerConfig: {
          bottom: 200,
          right: 0,
          width: 320,
          height: 180
        }
      }
    }
  }  

];

export default {
  ...AppthenXgplayerMeta,
  snippets
};
