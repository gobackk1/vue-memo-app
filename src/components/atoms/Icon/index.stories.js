import Icon from "./index.vue"
import { action } from "@storybook/addon-actions"

export default {
  title: "Icon",
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
  render() {
    return <Icon name="menu" handle-click={action("click")} />
  }
})
export const WithInvalidIconSize = () => ({
  render() {
    return <Icon name="menu" size="f" />
  }
})
