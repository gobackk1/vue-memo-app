const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    storybook: {
      allowedPlugins: ["define"]
    }
  },
  runtimeCompiler: true
})
