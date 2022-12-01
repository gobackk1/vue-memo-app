import Icon from "./index.vue"
import { action } from "@storybook/addon-actions"

export default {
  name: "Icon",
  component: Icon
}

export const Default = () => ({
  render() {
    return <Icon name="menu" />
  }
})

export const MenuIconSizeS = () => ({
  render() {
    return <Icon name="menu" size="s" />
  }
})
export const MenuIconSizeL = () => ({
  render() {
    return <Icon name="menu" size="l" />
  }
})
export const MenuIconSizeXL = () => ({
  render() {
    return <Icon name="menu" size="xl" />
  }
})
export const ClickableMenuIcon = () => ({
  components: { Icon },
  data() {
    return {
      onClick() {
        action("click")()
      }
    }
  },
  template: `<Icon name="menu" @click="onClick" />`
})
export const WithInvalidIconSize = () => ({
  render() {
    return <Icon name="menu" size="f" />
  }
})
