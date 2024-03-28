const fs = require('fs');
const path = require('path');

module.exports = ({ onHook }) => {
  onHook('after.build.compile', (stats) => {
    fs.writeFileSync(
      path.resolve('dist/utils.js'),
      fs.readFileSync(path.resolve('scripts/utils.js')),
    );
    fs.writeFileSync(
      path.resolve('dist/assets.json'),
      fs.readFileSync(path.resolve('build/lowcode/assets-prod.json')),
    );
  });
};
