import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.scss"],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(path.resolve("./"), 'node_modules/bootstrap'),
    }
  },
})
