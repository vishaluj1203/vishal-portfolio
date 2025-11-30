import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    base: '/vishal-portfolio/',
    plugins: [vue()],
    server: { port: 5173 }
})
