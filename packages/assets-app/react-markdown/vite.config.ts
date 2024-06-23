import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/*.ts',
      fileName: (format) => `index.${format}.js`,
      name: '[GLobalVariableName]',
      formats: ["cjs", "umd"]
    },
    rollupOptions: {
      input: {
        index: "./src/index.ts",
      },
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
        name: '[GLobalVariableName]'
      }
    }
  }
})
