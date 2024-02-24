const path = require('path')
import { resolve } from 'path';

import handlebars from 'vite-plugin-handlebars';

const noAttr = () => {
    return {
        name: "no-attribute",
        transformIndexHtml(html) {
            return html.replace(`type="module" crossorigin`, "");
        }
    }
}

export default {
	base: '',
	root: path.resolve(__dirname, 'src'),
	build: {
		
		rollupOptions: {
			input: {
				index: path.resolve(__dirname, 'src/index.html'),
                about: path.resolve(__dirname, 'src/about.html'),
                cart: path.resolve(__dirname, 'src/cart.html'),
                catalog: path.resolve(__dirname, 'src/catalog.html'),
                contacts: path.resolve(__dirname, 'src/contacts.html'),
                orders: path.resolve(__dirname, 'src/orders.html'),
                product: path.resolve(__dirname, 'src/product.html'),
                profile: path.resolve(__dirname, 'src/profile.html'),
                text: path.resolve(__dirname, 'src/text.html')
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
        [noAttr()]
	],
}