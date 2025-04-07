import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ai-agent-selling-site/', // Set the base path for GitHub Pages
  build: {
    outDir: 'dist' // Ensure the output directory is 'dist'
  }
});
