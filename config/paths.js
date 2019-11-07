const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../src'), // source files
  html: path.resolve(__dirname, '../src/html'), // Django template files
  build: path.resolve(__dirname, '../dist/'), // production build files output path
  // static: path.resolve(__dirname, '../public'), // static files to copy to build folder,
}
