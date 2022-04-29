const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/alef-test/' : '/',
  lintOnSave: false,
  transpileDependencies: true
})
