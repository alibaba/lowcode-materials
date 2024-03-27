import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/*.ts',
      fileName: (format) => `index.${format}.js`,
      name: 'AppthenAntdPro',
      formats: ["cjs", "umd", "es"]
    },
    rollupOptions: {
      input: {
        index: "./src/index.ts",
      },
      external: ['react', 'react-dom', 'antd'],
      output: {
        globals: {
          react: 'React',
          antd: 'antd',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
        name: 'AppthenAntdPro'
      }
    }
  }
})
