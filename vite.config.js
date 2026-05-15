import { defineConfig } from 'vite' // აი ეს ხაზი იყო გამოტოვებული ან არასწორი
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000,
    strictPort: true,
    host: '127.0.0.1',
    watch: {
      usePolling: true,
    }
  }
})