const fs = require('fs');
const path = require('path');
const execute = require('./execShell').default;

const debugProject = process.env.DEV_PROJECT || 'disscode-vite';

/**
 * 复制es & lib & types
 */
const targetPath = `/Users/huanglei/Documents/work/mengti/${debugProject}/node_modules/@appthen/react/es`;
const targetDistPath = `/Users/huanglei/Documents/work/mengti/${debugProject}/node_modules/@appthen/react/dist`;
const targetTypesPath = `/Users/huanglei/Documents/work/mengti/${debugProject}/node_modules/@appthen/react/types`;
console.log('copy to target')
execute(`rm -rf ${targetPath} && rm -rf ${targetDistPath}`, () => {
  execute(`rm -rf ${targetTypesPath}`, () => {
    execute(`cp -R ${path.resolve(__dirname, '../es')} ${targetPath} && cp -R ${path.resolve(__dirname, '../dist')} ${targetDistPath}`, () => {
      execute(`cp -R ${path.resolve(__dirname, '../types')} ${targetTypesPath}`);
    });
  });
});
