module.exports = {
  assetsDir: 'static',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  },
  devServer: {
    port: 3333,
    open: true
    // proxy: {
    //   '': {
    //     target: '',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {}
    //   }
    // }
  }
}
