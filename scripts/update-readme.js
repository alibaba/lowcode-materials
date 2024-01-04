const glob = require('glob');
const fs = require('fs');

const nameVersionList = glob.sync('packages/*/package.json', {
  absolute: true,
}).map(require).map(({ name, version }) => ({
  name,
  version,
}));

const readmeFiles = glob.sync('**/README.md', {
  absolute: true,
  ignore: ['node_modules/**'],
});

readmeFiles.forEach((readmeFile) => {
  const content = fs.readFileSync(readmeFile, 'utf8');

  let newContent = content;

  nameVersionList.forEach(({ name, version }) => {
    const re = new RegExp(`${name}@\\d+\\.\\d+\\.\\d+`, 'g');
    newContent = newContent.replace(re, `${name}@${version}`);
  });

  if (newContent !== content) {
    console.log(`Updating ${readmeFile}`);
    fs.writeFileSync(readmeFile, newContent);
  }
});


