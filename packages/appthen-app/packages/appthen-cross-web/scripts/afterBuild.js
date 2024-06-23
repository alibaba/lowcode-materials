const fs = require('fs');
const path = require('path');
const execute = require('./execShell').default;

const debugProject = process.env.DEV_PROJECT || 'disscode-vite';

/**
 * 复制es & lib & types
 */
const targetPath = `/Users/huanglei/Documents/work/mengti/${debugProject}/node_modules/@disscode/react/es`;
const targetLibPath = `/Users/huanglei/Documents/work/mengti/${debugProject}/node_modules/@disscode/react/lib`;
const targetTypesPath = `/Users/huanglei/Documents/work/mengti/${debugProject}/node_modules/@disscode/react/types`;
execute(`rm -rf ${targetPath} && rm -rf ${targetLibPath}`, () => {
  execute(`rm -rf ${targetTypesPath}`, () => {
    execute(`cp -R ${path.resolve(__dirname, '../es')} ${targetPath} && cp -R ${path.resolve(__dirname, '../lib')} ${targetLibPath}`, () => {
      execute(`cp -R ${path.resolve(__dirname, '../types')} ${targetTypesPath}`);
    });
  });
});
