import fs from 'fs-extra'
import { GlobSync } from 'glob'
import { resolve } from 'path'

const getAlias = () => {
  const basePath = resolve(__dirname, '../')
  const pkg = fs.readJSONSync(resolve(basePath, 'package.json')) || {}
  const results = {}
  const workspaces = pkg.workspaces
  if (Array.isArray(workspaces)) {
    workspaces.forEach((pattern) => {
      const { found } = new GlobSync(pattern, { cwd: basePath })
      found.forEach((name) => {
        const pkg = fs.readJSONSync(resolve(basePath, name, './package.json'))
        results[pkg.name] = resolve(basePath, name, './src')
      })
    })
  }
  return results
}

export default {
  npmClient: 'yarn',
  routes: [
    {
      path: '/',
      component: 'designer'
    }
  ],
  alias: getAlias(),
  links: [
    {
      href: 'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/variables.css',
      rel: 'stylesheet'
    },
    {
      href: 'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/dist/next.var.min.css',
      rel: 'stylesheet'
    },
    {
      href: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.0.10/dist/css/engine-core.css',
      rel: 'stylesheet'
    },
    {
      href: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.3/dist/css/engine-ext.css',
      rel: 'stylesheet'
    }
  ],
  externals: {
    react: 'var window.React',
    'react-dom': 'var window.ReactDOM',
    'prop-types': 'var window.PropTypes',
    '@alifd/next': 'var window.Next',
    '@alilc/lowcode-engine': 'var window.AliLowCodeEngine',
    '@alilc/lowcode-editor-core':
      'var window.AliLowCodeEngine.common.editorCabin',
    '@alilc/lowcode-editor-skeleton':
      'var window.AliLowCodeEngine.common.skeletonCabin',
    '@alilc/lowcode-designer':
      'var window.AliLowCodeEngine.common.designerCabin',
    '@alilc/lowcode-engine-ext': 'var window.AliLowCodeEngineExt',
    '@ali/lowcode-engine': 'var window.AliLowCodeEngine',
    moment: 'var window.moment',
    lodash: 'var window._'
  },
  scripts: [
    'https://g.alicdn.com/code/lib/react/17.0.0/umd/react.production.min.js',
    'https://g.alicdn.com/code/lib/react-dom/17.0.0/umd/react-dom.production.min.js',
    'https://g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js',
    'https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js',
    'https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js',
    'https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js',
    'https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.js',
    'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@latest/dist/js/engine-core.js',
    'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@latest/dist/js/engine-ext.js'
  ]
}
