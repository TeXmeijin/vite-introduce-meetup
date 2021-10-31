import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    plugins: [
      react(),
      mode === 'analyze' &&
        visualizer({
          open: true,
          filename: 'dist/stats.html',
          gzipSize: true,
          brotliSize: true,
        }),
    ]
  }
})

/**
 * import { terser } from 'rollup-plugin-terser';
 * 
          terser({
            compress: {
              // ステージングまではConsoleはDropしないようにしておく
              drop_console: mode === 'production',
            },
 * 
     build: {
      rollupOptions: {
        output: {
          manualChunks: {
             vendor: ['react', 'react-router-dom', 'react-dom'],

// ...
          
          chunkFileNames: mode === 'production' ? 'assets/[hash].js' : 'assets/[name]-[hash].js',
 */