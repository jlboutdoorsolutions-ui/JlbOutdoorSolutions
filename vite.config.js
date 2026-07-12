import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: If you deploy to https://<username>.github.io/<repo-name>/
// set base to '/<repo-name>/' (with slashes on both sides).
// If you deploy to a custom domain or to <username>.github.io root repo,
// set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/jlb-outdoor-solutions/',
})
