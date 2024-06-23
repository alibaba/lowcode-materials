const fs = require('fs-extra');
const path = require('path');
const execute = require('./execShell').default;

const targetPath = '/Users/huanglei/Documents/work/mengti/disscode-taro/node_modules/cross-ui/rn';
const targetTypesPath = '/Users/huanglei/Documents/work/mengti/disscode-taro/node_modules/cross-ui/types';
execute(`rm -rf ${targetPath}`, () => {
  execute(`rm -rf ${targetTypesPath}`, () => {
    execute(`cp -R ${path.resolve(__dirname, '../rn')} ${targetPath}`, () => {
      execute(`cp -R ${path.resolve(__dirname, '../types')} ${targetTypesPath}`);
    });
  });
});
