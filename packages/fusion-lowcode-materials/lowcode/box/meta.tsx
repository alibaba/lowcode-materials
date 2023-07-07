module.exports = {
  group: '原子组件',
  componentName: 'Box',
  title: '容器',
  category: '布局容器类',
  icon: 'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_table.png',

  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Box',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
      description: '自定义内敛样式',
    },
    {
      name: 'direction',
      title: '对齐方向',
      defaultValue: 'column',
      initialValue: 'column',
      setter: {
        componentName: 'RadioGroupSetter',
        initialValue: 'column',
        defaultValue: 'column',
        props: {
          defaultValue: 'column',
          options: [
            {
              // "title": "| 垂直",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 9 18"
                >
                  <g fillRule="evenodd">
                    <path d="M0 6h9v5H0zm5 9v-3H4v3H2l2.5 3L7 15H5z" />
                    <path opacity=".4" d="M1 1h7v3H1z" />
                    <path d="M1 1v3h7V1H1zM0 0h9v5H0V0z" />
                  </g>
                </svg>
              ),
              value: 'column',
            },
            {
              // "title": "- 水平",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 19 9"
                >
                  <g fillRule="evenodd">
                    <path d="M16 4h-4v1h4v2l3-2.5L16 2v2zM6 0h5v9H6z" />
                    <path opacity=".4" d="M1 1h3v7H1z" />
                    <path d="M1 1v7h3V1H1zM0 0h5v9H0V0z" />
                  </g>
                </svg>
              ),
              value: 'row',
            },
          ],
        },
      },
    },
    {
      name: 'justify',
      title: '主轴对齐',
      defaultValue: 'center',
      initialValue: 'center',
      condition: (target) => {
        return target.parent.getPropValue('direction') === 'row';
      },
      setter: {
        componentName: 'RadioGroupSetter',
        initialValue: 'center',
        defaultValue: 'center',
        props: {
          defaultValue: 'center',
          options: [
            {
              // "title": "| 左",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 24 17"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M0 0h1v17H0z" />
                    <path d="M8 4h5v9H8z" />
                    <path opacity=".4" d="M3 5h3v7H3z" />
                    <path d="M3 5v7h3V5H3zM2 4h5v9H2V4z" />
                  </g>
                </svg>
              ),
              value: 'flex-start',
            },
            {
              // "title": "中",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 13 17"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M6 0h1v17H6z" />
                    <path d="M8 4h5v9H8z" />
                    <path opacity=".4" d="M1 5h3v7H1z" />
                    <path d="M1 5v7h3V5H1zM0 4h5v9H0V4z" />
                  </g>
                </svg>
              ),
              value: 'center',
            },
            {
              // "title": "右 |",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 24 17"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M23 0h1v17h-1z" />
                    <path d="M17 4h5v9h-5z" />
                    <path opacity=".4" d="M12 5h3v7h-3z" />
                    <path d="M12 5v7h3V5h-3zm-1-1h5v9h-5V4z" />
                  </g>
                </svg>
              ),
              value: 'flex-end',
            },
            {
              // "title": "两端",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 24 17"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M0 0h1v17H0zm23 0h1v17h-1z" />
                    <path d="M17 4h5v9h-5z" />
                    <path opacity=".4" d="M3 5h3v7H3z" />
                    <path d="M3 5v7h3V5H3zM2 4h5v9H2V4z" />
                  </g>
                </svg>
              ),
              value: 'space-between',
            },
            {
              // "title": "等分",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 16 17"
                >
                  <g fillRule="evenodd">
                    <path
                      d="M2 0h1v17H2V0zm0 3.5h1v10H2v-10zM13 0h1v17h-1V0zm0 3.5h1v10h-1v-10z"
                      opacity=".5"
                    />
                    <path d="M11 4h5v9h-5z" />
                    <path opacity=".4" d="M1 5h3v7H1z" />
                    <path d="M1 5v7h3V5H1zM0 4h5v9H0V4z" />
                  </g>
                </svg>
              ),
              value: 'space-around',
            },
          ],
        },
      },
    },
    {
      name: 'justify',
      title: '主轴对齐',
      defaultValue: 'center',
      initialValue: 'center',
      condition: (target) => {
        return target.parent.getPropValue('direction') === 'column';
      },
      setter: {
        componentName: 'RadioGroupSetter',
        initialValue: 'center',
        defaultValue: 'center',
        props: {
          defaultValue: 'center',
          options: [
            {
              // "title": "上",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 21 18"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M0 0h21v1H0z" />
                    <path d="M6 8h9v5H6z" />
                    <path opacity=".4" d="M7 3h7v3H7z" />
                    <path d="M7 3v3h7V3H7zM6 2h9v5H6V2z" />
                  </g>
                </svg>
              ),
              value: 'flex-start',
            },
            {
              // "title": "中",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 21 13"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M0 6h21v1H0z" />
                    <path d="M6 8h9v5H6z" />
                    <path opacity=".4" d="M7 1h7v3H7z" />
                    <path d="M7 1v3h7V1H7zM6 0h9v5H6V0z" />
                  </g>
                </svg>
              ),
              value: 'center',
            },
            {
              // "title": "下",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 21 18"
                >
                  <g fillRule="evenodd">
                    <path d="M6 11h9v5H6z" />
                    <path opacity=".4" d="M7 6h7v3H7z" />
                    <path d="M7 6v3h7V6H7zM6 5h9v5H6V5z" />
                    <path opacity=".5" d="M0 17h21v1H0z" />
                  </g>
                </svg>
              ),
              value: 'flex-end',
            },
            {
              // "title": "两端",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 21 18"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M0 0h21v1H0zm0 17h21v1H0z" />
                    <path d="M6 11h9v5H6z" />
                    <path opacity=".4" d="M7 3h7v3H7z" />
                    <path d="M7 3v3h7V3H7zM6 2h9v5H6V2z" />
                  </g>
                </svg>
              ),
              value: 'space-between',
            },
            {
              // "title": "等分",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 21 13"
                >
                  <g fillRule="evenodd">
                    <path
                      d="M0 2h21v1H0V2zm5.5 0h10v1h-10V2zM0 10h21v1H0v-1zm5.5 0h10v1h-10v-1z"
                      opacity=".5"
                    />
                    <path d="M6 8h9v5H6z" />
                    <path opacity=".4" d="M7 1h7v3H7z" />
                    <path d="M7 1v3h7V1H7zM6 0h9v5H6V0z" />
                  </g>
                </svg>
              ),
              value: 'space-around',
            },
          ],
        },
      },
    },
    {
      name: 'align',
      title: '交叉轴对齐',
      defaultValue: 'center',
      initialValue: 'center',
      condition: (target) => {
        return target.parent.getPropValue('direction') === 'row';
      },
      setter: {
        componentName: 'RadioGroupSetter',
        initialValue: 'center',
        props: {
          defaultValue: 'center',
          options: [
            {
              // "title": "上",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 21 18"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M0 0h21v1H0z" />
                    <path d="M11 2h5v9h-5z" />
                    <path opacity=".4" d="M6 3h3v7H6z" />
                    <path d="M6 3v7h3V3H6zM5 2h5v9H5V2z" />
                  </g>
                </svg>
              ),
              value: 'flex-start',
            },
            {
              // "title": "中",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 21 9"
                >
                  <g fillRule="evenodd">
                    <path d="M0 4h21v1H0V4zm4.5 0h6v1h-6V4zm6 0h6v1h-6V4z" opacity=".5" />
                    <path d="M11 0h5v9h-5z" />
                    <path opacity=".4" d="M6 1h3v7H6z" />
                    <path d="M6 1v7h3V1H6zM5 0h5v9H5V0z" />
                  </g>
                </svg>
              ),
              value: 'center',
            },
            {
              // "title": "下",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 21 18"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M0 17h21v1H0z" />
                    <path d="M11 7h5v9h-5z" />
                    <path opacity=".4" d="M6 8h3v7H6z" />
                    <path d="M6 8v7h3V8H6zM5 7h5v9H5V7z" />
                  </g>
                </svg>
              ),
              value: 'flex-end',
            },
            {
              // "title": "等高",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 21 18"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M0 17h21v1H0zM0 0h21v1H0z" />
                    <path d="M11 2h5v14h-5z" />
                    <path opacity=".4" d="M6 3h3v12H6z" />
                    <path d="M6 3v12h3V3H6zM5 2h5v14H5V2z" />
                  </g>
                </svg>
              ),
              value: 'stretch',
            },
            {
              // "title": "基线",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 21 11"
                >
                  <g fillRule="evenodd">
                    <path d="M0 5h21v1H0V5zm4.5 0h6v1h-6V5zm6 0h6v1h-6V5z" opacity=".5" />
                    <path d="M11 1h5v9h-5V1zm1 1h3v3h-3V2z" />
                    <path opacity=".4" d="M6 5h3v5H6z" />
                    <path d="M6 3v7h3V3H6zM5 2h5v9H5V2z" />
                  </g>
                </svg>
              ),
              value: 'baseline',
            },
          ],
        },
      },
    },
    {
      name: 'align',
      title: '交叉轴对齐',
      defaultValue: 'center',
      initialValue: 'center',
      condition: (target) => {
        return target.parent.getPropValue('direction') === 'column';
      },
      setter: {
        componentName: 'RadioGroupSetter',
        initialValue: 'center',
        props: {
          defaultValue: 'center',
          options: [
            {
              // "title": '| 左',
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 24 17"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M0 0h1v17H0z" />
                    <path d="M2 9h9v5H2z" />
                    <path opacity=".4" d="M3 4h7v3H3z" />
                    <path d="M3 4v3h7V4H3zM2 3h9v5H2V3z" />
                  </g>
                </svg>
              ),
              value: 'flex-start',
            },
            {
              // "title": "中",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 9 17"
                >
                  <g fillRule="evenodd">
                    <path d="M4 0h1v17H4V0zm0 8.5h1v6H4v-6zm0-6h1v6H4v-6z" opacity=".5" />
                    <path d="M0 9h9v5H0z" />
                    <path opacity=".4" d="M1 4h7v3H1z" />
                    <path d="M1 4v3h7V4H1zM0 3h9v5H0V3z" />
                  </g>
                </svg>
              ),
              value: 'center',
            },
            {
              // "title": "右 |",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 24 17"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M23 0h1v17h-1z" />
                    <path d="M13 9h9v5h-9z" />
                    <path opacity=".4" d="M14 4h7v3h-7z" />
                    <path d="M14 4v3h7V4h-7zm-1-1h9v5h-9V3z" />
                  </g>
                </svg>
              ),
              value: 'flex-end',
            },
            {
              // "title": "等宽",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 24 17"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M23 0h1v17h-1zM0 0h1v17H0z" />
                    <path d="M2 9h20v5H2z" />
                    <path opacity=".4" d="M3 4h18v3H3z" />
                    <path d="M3 4v3h18V4H3zM2 3h20v5H2V3z" />
                  </g>
                </svg>
              ),
              value: 'stretch',
            },
            {
              // "title": "基线",
              title: (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  width="20"
                  height="20"
                  viewBox="0 0 24 17"
                >
                  <g fillRule="evenodd">
                    <path opacity=".5" d="M0 0h1v17H0z" />
                    <path d="M2 9h9v5H2V9zm1 1h2v3H3v-3z" />
                    <path opacity=".4" d="M5 4h5v3H5z" />
                    <path d="M3 4v3h7V4H3zM2 3h9v5H2V3z" />
                  </g>
                </svg>
              ),
              value: 'baseline',
            },
          ],
        },
      },
    },
    {
      name: 'style.width',
      title: '宽度',
      defaultValue: '',
      initialValue: '',
      setter: {
        componentName: 'RadioGroupSetter',
        initialValue: '',
        props: {
          defaultValue: '',
          options: [
            {
              title: '默认',
              value: '',
            },
            {
              title: '铺满',
              value: '100%',
            },
          ],
        },
      },
    },
    {
      name: 'spacing',
      title: '内容间距',
      defaultValue: 0,
      initialValue: 0,
      setter: {
        componentName: 'NumberSetter',
        props: {
          step: 4,
        },
      },
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: {
      style: true,
      loop: false,
    },
  },
  snippets: [
    {
      title: 'Box',
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_table.png',
      schema: {
        componentName: 'Box',
        props: {},
      },
    },
  ],
};
