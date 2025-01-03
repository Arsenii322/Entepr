import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    host: "192.168.4.1"
  },
  build: {
    outDir: "docs"
  },
  plugins: [react()],
})
