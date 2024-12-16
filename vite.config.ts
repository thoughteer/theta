import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
	plugins: [
        viteSingleFile(),
        createHtmlPlugin({
            minify: true,
        }),
    ],
    build: {
        outDir: 'root',
        rollupOptions: {
            input: './index.html',
        },
    },
})
