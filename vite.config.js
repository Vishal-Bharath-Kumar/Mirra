import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-map-gl"],
  },
  resolve: {
    alias: {
      "react-map-gl": "react-map-gl/dist/esm/index.js",
    },
  },
})
