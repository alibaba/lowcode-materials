const fs = require('fs');
const path = require('path');
const execute = require('./execShell').default;

const debugProject = process.env.DEV_PROJECT || 'disscode-taro';

const targetPath = `/Users/huanglei/Documents/work/mengti/${debugProject}/node_modules/@disscode/react/dist`;
const targetLibPath = `/Users/huanglei/Documents/work/mengti/${debugProject}/node_modules/@disscode/react/lib`;
const targetUtilsPath = `/Users/huanglei/Documents/work/mengti/${debugProject}/node_modules/@disscode/react/utils`;
const targetTypesPath = `/Users/huanglei/Documents/work/mengti/${debugProject}/node_modules/@disscode/react/types`;
execute(`rm -rf ${targetPath} && rm -rf ${targetLibPath} && rm -rf ${targetUtilsPath}`, () => {
  execute(`rm -rf ${targetTypesPath}`, () => {});
});
