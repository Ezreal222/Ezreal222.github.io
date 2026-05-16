import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploying to https://ezreal222.github.io (user site) — base is "/".
// If you ever move this to a project repo (e.g. github.com/Ezreal222/portfolio),
// change base to "/portfolio/".
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})
