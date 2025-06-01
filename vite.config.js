import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(
      {
        theme: {
        extend: {
          stroke: {
            customBlue: 'hsl(226, 52%, 31%)',
          },
        },
      },
    }
    )
    
  ],
})
