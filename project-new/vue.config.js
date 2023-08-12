module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/AngelSparkHTML/'
  : '/',
    css: {
      loaderOptions: {
        sass: {
          //additionalData: `~@import "@/assets/scss/styles.scss";`,
        },
      },
    },
  };