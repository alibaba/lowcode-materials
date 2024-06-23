const fs = require('fs-extra');
const path = require('path');
const execute = require('./execShell').default;

const targetPath = '/Users/huanglei/Documents/work/mengti/preview/node_modules/@disscode/react/rn';
const targetTypesPath = '/Users/huanglei/Documents/work/mengti/preview/node_modules/@disscode/react/types';
execute(`rm -rf ${targetPath}`, () => {
  execute(`rm -rf ${targetTypesPath}`, () => {
    execute(`cp -R ${path.resolve(__dirname, '../rn')} ${targetPath}`, () => {
      execute(`cp -R ${path.resolve(__dirname, '../types')} ${targetTypesPath}`);
    });
  });
});
