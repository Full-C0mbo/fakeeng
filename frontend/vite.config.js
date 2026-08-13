import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: command === 'build' ? '/fakeeng/' : '/' // Use the GitHub Pages URL for production builds, and localhost for development builds
})
