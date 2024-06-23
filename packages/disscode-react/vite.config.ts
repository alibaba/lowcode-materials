import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '@tarojs': path.resolve(__dirname, './src/libs/tarojs'),
    },
  },
  build: {
    lib: {
      entry: './src/index.tsx',
      fileName: (format) => `index.${format}.js`,
      name: 'AppthenReact',
      formats: ["cjs", "es"] // 移除 UMD 格式
    },
    rollupOptions: {
      input: {
        index: "./src/index.tsx",
        utils: "./src/utils/index.ts",
      },
      external: ['react', 'react-dom', 'antd', 'react-router', 'react-router-dom', 'history'],
      output: {
        globals: {
          react: 'React',
          antd: 'antd',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
        name: 'AppthenReact'
      }
    }
  }
});