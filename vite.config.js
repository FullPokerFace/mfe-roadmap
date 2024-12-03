import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import markdown, { Mode } from 'vite-plugin-markdown'

export default defineConfig({
    plugins: [
        react(),
        markdown({
            mode: Mode.REACT
        })
    ],
    build: {
        outDir: 'dist',
        minify: 'terser',
        sourcemap: false,
        rollupOptions: {
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
        include: ['vfile']
    },
    server: {
        port: 3000,
        open: true,
    },
})