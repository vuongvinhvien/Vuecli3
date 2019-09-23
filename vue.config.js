// module.exports = {
//     css: {
//       sourceMap: true
//     }
//   }

module.exports = {
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/web/'
    : '/'
  }
