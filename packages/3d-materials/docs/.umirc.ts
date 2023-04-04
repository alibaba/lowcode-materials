import { defineConfig } from 'dumi';
import fs from 'fs';
import { join } from 'path';

const { version } = JSON.parse(fs.readFileSync(join(__dirname, '../package.json'), 'utf8'));

const productStyles =
  '.__dumi-default-menu{display:none} .__dumi-default-layout{padding-left:58px!important}';

const productPath = `/@alilc/3d-materials@${version}/build/docs/`;

export default defineConfig({
  // other config entry
  chainWebpack(memo) {
    memo.module
      .rule('js')
      .include.add(join(__dirname, '../'))
      .end()
      .exclude.add(/node_modules/);

    // 删除 dumi 内置插件
    memo.plugins.delete('friendly-error');
    memo.plugins.delete('copy');
    // 配置文件import alias
    memo.resolve.alias.set('@', join(__dirname, '../src'));
    memo.resolve.alias.set('@components', join(__dirname, '../src/components'));
    memo.resolve.alias.set('@alilc/3d-materials', join(__dirname, '../src'));
  },
  logo: 'https://fusion.alicdn.com/images/jdSvK6gaqaWB.png',
  exportStatic: process.env.NODE_ENV === 'production' ? { htmlSuffix: true } : {},
  base: process.env.NODE_ENV === 'production' ? productPath : '/',
  publicPath: process.env.NODE_ENV === 'production' ? productPath : '/',
  styles: process.env.NODE_ENV === 'production' ? [productStyles] : [],
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  // md文件中使用@需配置alias
  alias: {
    '@': join(__dirname, '../src'),
    '@components': join(__dirname, '../src/components'),
    '@alilc/3d-materials': join(__dirname, '../src'),
  },
  apiParser: {
    propFilter: (prop) => {
      if (prop.declarations !== undefined && prop.declarations.length > 0) {
        const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
          if (declaration.fileName.includes('node_modules')) {
            return (
              declaration.fileName.includes('alifd/next') ||
              declaration.fileName.includes('bizcharts')
            );
          }
          return true;
        });

        return Boolean(hasPropAdditionalDescription);
      }
      return true;
    },
  },
  mfsu: {},
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  outputPath: '../build/docs',
});
