import metas from './metas';
import * as setters from './_setters';
import { version as LIBRARY_VERSION } from '../package.json';
import { screenshotsCdn as SCREENSHOTS_CDN } from '../../../package.json';
import { version as DEFAULT_ANTD_VERSION } from 'antd/package.json';
import { version as DEFAULT_ANTD_ICONS_VERSION } from '@ant-design/icons/package.json';
// @ts-ignore
import { version as DEFAULT_MOMENT_VERSION } from 'moment/package.json';
import transform from './_utils/transform-meta';

export { setters };

const MATERIALS_LIBRARY_NAME = '@ali/antd-lowcode-materials';

const isBeta = LIBRARY_VERSION.indexOf('beta') > -1; // DEF发TNPM包的逻辑，beta版本对应日常
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const LIBRARY_VERSION_WITHOUT_SUFFIX = LIBRARY_VERSION.replace(/-beta.+$/, '');

const componentMetas = metas
  .filter(meta => !(meta as any)['x-disabled'])
  .map(meta => {
    const { componentName } = meta;
    const names = componentName.split('.');
    const [exportName, subName] = names;

    ((meta as any).snippets || []).forEach((snippet: any) => {
      snippet.screenshot = `${SCREENSHOTS_CDN}/${snippet.screenshot}`;
    });

    meta.props.forEach((prop: any) => {
      if (prop?.title?.tip) {
        prop.title.tip = `${prop.name} | ${prop?.title!.tip}`;
      }
    });

    (meta as any).npm = {
      package: MATERIALS_LIBRARY_NAME,
      version: LIBRARY_VERSION,
      exportName: exportName,
      main: 'dist/antd-lowcode.esm.js',
      destructuring: true,
      subName:
        names.length > 1
          ? componentName.slice(componentName.indexOf('.') + 1)
          : subName,
    };

    return meta;
  });

interface GenerateAssetsOptions {
  supportVariable?: boolean;
  icon?: boolean;
  iconfontScriptUrls?: string[];
  antdIcons?: {
    version?: string;
    urls?: string[];
  };
  antd?: {
    version?: string;
    urls?: string[];
  };
  moment?: {
    version?: string;
    urls?: string[];
  };
}

export function generateAssets({
  supportVariable = true,
  icon = true,
  iconfontScriptUrls = [],
  antdIcons = {
    version: DEFAULT_ANTD_ICONS_VERSION,
  },
  antd = {
    version: DEFAULT_ANTD_VERSION,
  },
  moment = {
    version: DEFAULT_MOMENT_VERSION,
  },
}: GenerateAssetsOptions = {}) {
  const components = componentMetas
    .filter(meta => icon || meta.componentName !== 'Icon')
    .map(meta => transform(meta as any, supportVariable) as any);

  const componentList: any[] = [];

  components.forEach(comp => {
    const category = comp.category;

    if (!category) return;

    let target = componentList.find(item => item.title === category);
    if (!target) {
      target = {
        title: category,
        icon: '',
        children: [],
      };

      componentList.push(target);
    }

    target.children.push({
      componentName: comp.componentName,
      library: MATERIALS_LIBRARY_NAME,
      title: comp.title || comp.componentName,
      icon: '',
      package: comp.npm.package,
      snippets: comp.snippets || [],
    });
  });

  // 去除掉没有内容的项
  componentList.forEach(category => {
    category.children = category.children.filter((comp: any) => {
      return comp.snippets.length > 0;
    });
  });

  return {
    version: LIBRARY_VERSION,
    packages: [
      iconfontScriptUrls && {
        package: 'iconfont-icons',
        urls: iconfontScriptUrls,
      },
      icon && {
        package: '@ant-design/icons',
        version: antdIcons.version,
        urls: antdIcons.urls ?? [
          `//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`,
        ],
        library: (antdIcons as any).library ?? 'icons',
      },
      {
        package: 'moment',
        version: moment.version,
        urls: moment.urls ?? [
          `//g.alicdn.com/code/lib/moment.js/${moment.version}/moment.js`,
          `//g.alicdn.com/code/lib/moment.js/${moment.version}/locale/zh-cn.js`,
        ],
        library: (moment as any).library ?? 'moment',
      },
      {
        package: 'antd',
        version: antd.version,
        urls: antd.urls ?? [
          `//g.alicdn.com/code/lib/antd/${antd.version}/antd${
            isProd ? '.min' : ''
          }.js`,
          `//g.alicdn.com/code/lib/antd/${antd.version}/antd${
            isProd ? '.min' : ''
          }.css`,
        ],
        library: (antd as any).library ?? 'antd',
      },
      {
        package: MATERIALS_LIBRARY_NAME,
        version: LIBRARY_VERSION,
        urls: isDev
          ? ['resources/antd-lowcode.js']
          : [
              `//${
                isBeta ? 'dev.' : ''
              }g.alicdn.com/code/npm/@ali/antd-lowcode/${LIBRARY_VERSION_WITHOUT_SUFFIX}/antd-lowcode.umd.js`,
            ],
        library: MATERIALS_LIBRARY_NAME,
      },
    ].filter(Boolean),
    components,
    componentList,
  };
}

const defaultAssets = generateAssets();

export default defaultAssets;
