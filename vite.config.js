import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdown from 'vite-plugin-markdown'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        markdown()
    ],
    build: {
        outDir: 'dist',
        minify: 'terser',
        sourcemap: false,
        rollupOptions: {
            external: ['#minpath', '#minproc', '#minurl'],
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        preserveSymlinks: true
    },
    optimizeDeps: {
        exclude: ['vfile']
    },
    server: {
        port: 3000,
        open: true,
    },
})