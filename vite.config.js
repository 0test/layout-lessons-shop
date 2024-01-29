const path = require('path')
import { resolve } from 'path';

import handlebars from 'vite-plugin-handlebars';

export default {
	base: '',
	root: path.resolve(__dirname, 'src'),
	build: {
		
		rollupOptions: {
			input: {
				index: path.resolve(__dirname, 'src/*.html'),
			},
			output: {
				assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split('.').at(1);
					let ext = assetInfo.name.split('.').pop()
	
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType) || /svg/i.test(ext)) {
						extType = 'img'
					} else if (/webfonts|fonts/i.test(extType) || /ttf|woff2/i.test(ext)) {
						extType = 'fonts'
					}
					else if(/css/i.test(extType) || /css/i.test(ext)){
						extType = 'css'  
					}
					return `assets/${extType}/[name].[hash][extname]`
				},
				chunkFileNames: 'assets/js/[name].[hash].js',
				entryFileNames: 'assets/js/[name].[hash].js'
			}
		},
		outDir: path.resolve(__dirname, 'dist'),
		assetsDir: 'assets',
		

	},
	server: {
		port: 8080,
		hot: true
	},
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, 'src/partials'),
		}),
	],
}