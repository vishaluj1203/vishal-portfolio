import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'


export default defineConfig({
    base: '/vishal-portfolio/',
    plugins: [vue()],
    server: { port: 5173 },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
