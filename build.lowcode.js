const { name, version } = require("./package.json");

const baseRenderUrl =
  process && process.argv && process.argv.includes("start")
    ? "."
    : `https://alifd.alicdn.com/npm/${name}@${version}`;

module.exports = {
  sourceMap: false,
  alias: {
    "@": "./src",
    lowcode: "./lowcode",
    "@alife/fusion-ui": "./src"
  },
  plugins: [
    [
      "@alifd/build-plugin-lowcode",
      {
        noParse: true,
        builtinAssets: [
          {
            packages: [
              {
                package: "moment",
                version: "2.24.0",
                urls: [
                  "https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js"
                ],
                library: "moment"
              },
              {
                package: "lodash",
                library: "_",
                urls: [
                  "https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js"
                ]
              },
              {
                title: "fusion组件库",
                package: "@alifd/next",
                version: "1.25.23",
                urls: [
                  "https://g.alicdn.com/code/lib/alifd__next/1.25.23/next.min.css",
                  "https://g.alicdn.com/code/lib/alifd__next/1.25.23/next-with-locales.min.js"
                ],
                library: "Next"
              },
              {
                title: "NextTable",
                package: "NextTable",
                version: "1.0.1",
                urls: [
                  "https://g.alicdn.com/fusion-platform/pro-table/1.0.1/next-table.js",
                  "https://g.alicdn.com/fusion-platform/pro-table/1.0.1/next-table.css"
                ],
                library: "NextTable"
              }
            ],
            components: []
          }
        ],
        baseUrl: {
          prod: `https://alifd.alicdn.com/npm/${name}@${version}`,
          daily: `https://alifd.alicdn.com/npm/${name}@${version}`
        },
        renderUrls: [
          `${baseRenderUrl}/dist/AlilcLowcodeMaterials.js`,
          `${baseRenderUrl}/dist/AlilcLowcodeMaterials.css`
        ],
        categories: ["通用", "导航", "信息输入", "信息展示", "信息反馈"],
        engineScope: '@alilc'
      }
    ],
    [
      "build-plugin-fusion",
      {
        uniteBaseComponent: "@alifd/next",
        importOptions: {
          libraryDirectory: "lib"
        }
      }
    ],
    "./plugin/compatible.build.js"
  ]
};
