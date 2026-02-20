import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// SPA fallback plugin - serves index.html for all routes so refresh works with BrowserRouter (no # in URL)
function spaFallback() {
  return {
    name: 'spa-fallback',
    configureServer(server) {
      const middleware = (req, res, next) => {
        const url = (req.url || '').split('?')[0]
        // Skip: static assets, HMR, vite internals, files with extensions
        if (
          url.startsWith('/src') ||
          url.startsWith('/@') ||
          url.startsWith('/node_modules') ||
          url.startsWith('/assets') ||
          url.includes('.') ||
          url === '/favicon.ico'
        ) {
          return next()
        }
        req.url = '/index.html'
        next()
      }
      // Add at start so it runs before Vite's handlers
      server.middlewares.stack.unshift({ route: '', handle: middleware })
    }
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  preview: {
    port: 3000
  }
})
