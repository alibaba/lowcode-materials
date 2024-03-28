
const rowProps = {
    "title": {
        "label": {
            "type": "i18n",
            "en-US": "RowProps",
            "zh-CN": "栅格配置"
        },
        "tip": "rowProps | only works when grid is enabled"
    },
    "name": "RowProps",
    "description": "only works when grid is enabled",
    "setter": {
        "componentName": "ObjectSetter",
        "props": {
            "config": {
                "items": [

                    {
                        name: 'gutter',
                        title: {
                            label: '开启栅格',
                            tip: 'gutter | 所占列数'
                        },
                        propType: 'Number',
                        setter: 'NumberSetter',
                    },
                ]
            }
        }
    },


}

const proform = [
    {
        "title": {
            "label": {
                "type": "i18n",
                "en-US": "submitter",
                "zh-CN": "按钮配置"
            },
            "tip": "submitter | @name 自定义提交的配置"
        },
        "name": "submitter",
        "description": "@name 自定义提交的配置",
        "setter": {
            "componentName": "MixedSetter",
            "props": {
                "setters": [
                    {
                        "componentName": "ObjectSetter",
                        "props": {
                            "config": {
                                "items": [
                                    {
                                        "title": {
                                            "label": {
                                                "type": "i18n",
                                                "en-US": "onSubmit",
                                                "zh-CN": "onSubmit"
                                            }
                                        },
                                        "name": "onSubmit",
                                        "setter": {
                                            "componentName": "FunctionSetter"
                                        }
                                    },
                                    {
                                        "title": {
                                            "label": {
                                                "type": "i18n",
                                                "en-US": "onReset",
                                                "zh-CN": "onReset"
                                            }
                                        },
                                        "name": "onReset",
                                        "setter": {
                                            "componentName": "FunctionSetter"
                                        }
                                    },
                                    {
                                        "title": {
                                            "label": {
                                                "type": "i18n",
                                                "en-US": "searchConfig",
                                                "zh-CN": "searchConfig"
                                            }
                                        },
                                        "name": "searchConfig",
                                        "setter": {
                                            "componentName": "ObjectSetter",
                                            "props": {
                                                "config": {
                                                    "items": [
                                                        {
                                                            "title": {
                                                                "label": {
                                                                    "type": "i18n",
                                                                    "en-US": "resetText",
                                                                    "zh-CN": "resetText"
                                                                }
                                                            },
                                                            "name": "resetText",
                                                            "setter": {
                                                                "componentName": "StringSetter",

                                                            }
                                                        },
                                                        {
                                                            "title": {
                                                                "label": {
                                                                    "type": "i18n",
                                                                    "en-US": "submitText",
                                                                    "zh-CN": "submitText"
                                                                }
                                                            },
                                                            "name": "submitText",
                                                            "setter": {
                                                                "componentName": "StringSetter",
                                                            }
                                                        }
                                                    ],
                                                    "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        "isRequired": false,
                                                        "props": {}
                                                    }
                                                }
                                            }
                                        }
                                    },
                                ],
                            }
                        }
                    },
                ]
            }
        }
    },
    {
        "title": {
            "label": {
                "type": "i18n",
                "en-US": "request",
                "zh-CN": "获取请求"
            },
            "tip": "request | @name 发起网络请求的参数,返回值会覆盖给 initialValues"
        },
        "name": "request",
        "description": "@name 发起网络请求的参数,返回值会覆盖给 initialValues",
        "setter": {
            "componentName": "FunctionSetter",
            "isRequired": false
        }
    },
    {
        "title": {
            "label": {
                "type": "i18n",
                "en-US": "params",
                "zh-CN": "请求参数"
            },
            "tip": "配合request"
        },
        "name": "request",
        "description": "@name 发起网络请求的参数,返回值会覆盖给 initialValues",
        "setter": {
            "componentName": "JsonSetter",
            "isRequired": false
        }
    },

    {
        name: 'grid',
        title: {
            label: '开启栅格',
            tip: 'grid | 所占列数'
        },
        propType: 'bool',
        setter: 'BoolSetter',
    },
    rowProps,
]


export default proform

