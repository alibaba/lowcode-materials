import NodePath from 'path';
import RollupJson from '@rollup/plugin-json';
import RollupNodeResolve from '@rollup/plugin-node-resolve';
import RollupCommonjs from '@rollup/plugin-commonjs';
import RollupTypescript from 'rollup-plugin-typescript2';
import RollupCopy from 'rollup-plugin-copy';
import RollupUrl from '@rollup/plugin-url';
import RollupImage from '@rollup/plugin-image';
import Package from '../package.json';
import iconsMaker from './iconsMaker.js';

iconsMaker('../rn/assets/iconfont.svg');

const resolveFile = (path) => NodePath.resolve(__dirname, '..', path);

const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/taro-h5',
  '@tarojs/react',
  'mobx',
  'mobx-react',
];

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: resolveFile(Package.module),
      format: 'es',
      sourcemap: true,
    },
  ],
  external: externalPackages,
  plugins: [
    RollupImage(),
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    RollupCommonjs({
      include: /\/node_modules\//,
    }),
    // RollupUrl({
    //   fileName: '[dirname][hash][extname]',
    //   sourceDir: NodePath.join(__dirname, 'src'),
    //   limit: 1 * 1024 * 1024,
    // }),
    RollupJson(),
    RollupTypescript({
      abortOnError: false,
      tsconfig: resolveFile('tsconfig.rollup.json'),
    }),
    RollupCopy({
      targets: [
        {
          src: resolveFile('src/style'),
          dest: resolveFile('dist'),
        },
        {
          src: resolveFile('src/assets'),
          dest: resolveFile('lib'),
        },
        {
          src: resolveFile('lib/utils'),
          dest: resolveFile(''),
        },
        {
          src: resolveFile('rn/style/**/*.scss'),
          dest: resolveFile('dist'),
          rename: (name, extension, fullpath) => {
            const relativePath = NodePath.relative(resolveFile('rn'), fullpath);

            return relativePath.replace('.scss', '.rn.scss');
          },
        },
      ],
    }),
  ],
};
