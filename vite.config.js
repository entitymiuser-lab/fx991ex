import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // For Electron: use relative paths. For web hosting: use '/'
  // Set VITE_BASE env var to override (e.g. '/fx991ex/' for GitHub Pages subfolder)
  base: process.env.ELECTRON === 'true'
    ? './'
    : (process.env.VITE_BASE || '/'),

  build: {
    outDir:    'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Inline small assets for better offline/APK performance
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          mathjs: ['mathjs'],
          react:  ['react', 'react-dom'],
        }
      }
    }
  },

  server: {
    port: 5173,
    strictPort: false,
  },

  preview: {
    port: 4173,
  }
})
