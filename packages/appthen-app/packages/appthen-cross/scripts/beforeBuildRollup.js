const fs = require('fs');
const path = require('path');

const indexTsxilePath = path.resolve(__dirname, '../src/index.tsx');
const indexTsxFile = fs.readFileSync(
  indexTsxilePath,
  { encoding: 'utf8', flag: 'r' },
);
fs.writeFileSync(indexTsxilePath, indexTsxFile.replace(`import './style/index.scss'`, `// import './style/index.scss'`))
