/// <reference types="vitest" />
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    test: {
        globals: true,
        include: ['./test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.{idea,git,cache,output,temp}/**',
        ],
        coverage: {
            include: ['./lib'],
            exclude: ['./src', 'node_modules/'],
        },
    },
}); 