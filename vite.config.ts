import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-ui': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-slot', '@radix-ui/react-tabs', 'lucide-react', 'embla-carousel-react'],
          'vendor-motion': ['framer-motion'],
        }
      }
    }
  }
})
