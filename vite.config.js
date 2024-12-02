import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdown from 'vite-plugin-markdown'


export default defineConfig({
    plugins: [
        react({ include: '**/*.js', jsxRuntime: 'classic' }),
        markdown()
    ],
    server: {
        port: 3000
    },
    esbuild: {
        loader: 'jsx',
    },
    optimizeDeps: {
        esbuild: {
            loader: {
                '.js': 'jsx',
            },
        }
    },
    assetsInclude: ['**/*.md'],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.md']
    }
})