import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const backendTarget =
    process.env.PORTFOLIO_BACKEND_URL || 'http://127.0.0.1:5000'

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: backendTarget,
                changeOrigin: true,
            },
            '/media': {
                target: backendTarget,
                changeOrigin: true,
            },
        },
    },
    test: {
        environment: 'jsdom',
        globals: true,
        passWithNoTests: true,
    },
})
