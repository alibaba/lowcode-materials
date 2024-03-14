import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/*.ts',
      fileName: (format) => `index.${format}.js`,
      name: 'FetchEventSource',
      formats: ["cjs", "umd"]
    },
    rollupOptions: {
      input: {
        index: "./src/index.ts",
      },
      external: ['react', 'react-dom', 'vue'],
      output: {
        globals: {
          '@antv/x6': 'X6',
          react: 'React',
          'react-dom': 'ReactDOM',
          vue: 'Vue',
        },
        exports: 'named',
        name: 'FetchEventSource'
      }
    }
  }
})
