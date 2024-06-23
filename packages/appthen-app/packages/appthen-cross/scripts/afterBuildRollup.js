const fs = require('fs');
const path = require('path');
const execute = require('./execShell').default;

const functionFilePath = path.resolve(__dirname, '../dist/style/function/px_function.scss');
const scssFile = fs.readFileSync(
  functionFilePath,
  { encoding: 'utf8', flag: 'r' },
);
fs.writeFileSync(functionFilePath, scssFile.replace('#{calc($px / 2)}px', '#{$px}px'))

const variablesFilePath = path.resolve(__dirname, '../dist/style/variables/default.scss');
const variableScssFile = fs.readFileSync(
  variablesFilePath,
  { encoding: 'utf8', flag: 'r' },
);
fs.writeFileSync(variablesFilePath, variableScssFile.replace('$hd: 1 !default;', '$hd: 2 !default;'))

const indexTsxilePath = path.resolve(__dirname, '../src/index.tsx');
const indexTsxFile = fs.readFileSync(
  indexTsxilePath,
  { encoding: 'utf8', flag: 'r' },
);
fs.writeFileSync(indexTsxilePath, indexTsxFile.replace(`// import './style/index.scss'`, `import './style/index.scss'`))

const debugProject = process.env.DEV_PROJECT || 'preview';
const projectPath = process.env.DEBUG_PROJECT_PATH || '/Users/huanglei/Documents/work/mengti';

/**
 * 复制dist & types
 */
const targetPath = `${projectPath}/${debugProject}/node_modules/cross-ui/dist`;
const targetLibPath = `${projectPath}/${debugProject}/node_modules/cross-ui/lib`;
const targetUtilsPath = `${projectPath}/${debugProject}/node_modules/cross-ui/utils`;
const targetTypesPath = `${projectPath}/${debugProject}/node_modules/cross-ui/types`;
execute(`rm -rf ${targetPath} && rm -rf ${targetLibPath} && rm -rf ${targetUtilsPath}`, () => {
  execute(`rm -rf ${targetTypesPath}`, () => {
    execute(`cp -R ${path.resolve(__dirname, '../dist')} ${targetPath} && cp -R ${path.resolve(__dirname, '../lib')} ${targetLibPath} && cp -R ${path.resolve(__dirname, '../utils')} ${targetUtilsPath}`, () => {
      execute(`cp -R ${path.resolve(__dirname, '../types')} ${targetTypesPath}`);
    });
  });
});
