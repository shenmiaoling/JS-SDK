const fs = require('fs')
const webpackAssets = './assets/webpack-assets.json'
const manifest = fs.existsSync(webpackAssets) ? require(webpackAssets) : {}

module.exports = manifest.vendors ? manifest : {
  index: {
    js: 'application.js',
    css: 'application.css'
  },
  vendors: {
    js: 'vendors.js'
  }
}
