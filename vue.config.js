const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    storybook: {
      allowedPlugins: ["define"]
    }
  }
})
