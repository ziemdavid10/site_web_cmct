import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Vite 4 uses the legacy Sass JS API; silence related deprecation noise
        silenceDeprecations: ['legacy-js-api', 'import'],
      },
    },
  },
})
