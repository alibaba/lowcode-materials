import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/*.tsx',
      fileName: (format) => `index.${format}.js`,
      name: 'xgplayer',
      formats: ["cjs", "umd"]
    },
    rollupOptions: {
      input: {
        index: "./src/index.tsx",
      },
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
        name: 'xgplayer'
      }
    }
  }
})
