import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {
      NODE_ENV: 'production',
    },
  },
  build: {
    lib: {
      entry: './src/*.tsx',
      fileName: (format) => `index.${format}.js`,
      name: 'AppthenReactFlow',
      formats: ['cjs', 'umd'],
    },
    rollupOptions: {
      input: {
        index: './src/index.tsx',
      },
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
        name: 'AppthenReactFlow',
      },
    },
  },
});
