const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'network': '@/network',
        'views': '@/views',
        'compoeents': '@/components',
        'assets': '@/assets',
        'common': '@/common',
      }
    }
  }
})
