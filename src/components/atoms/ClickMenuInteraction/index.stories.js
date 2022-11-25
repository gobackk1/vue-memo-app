import ClickMenuInteraction from "./index.vue"
import Icon from "@/components/atoms/Icon"
import ContextMenu from "@/components/molecules/ContextMenu"
import { action } from "@storybook/addon-actions"
import VueRouter from "vue-router"
import { routes } from "@/router"

const menuList = [
  {
    name: "アバウトページへ",
    link: "/about"
  },
  {
    name: "ログアウト",
    callback: () => {
      action("ログアウトしました")()
    }
  }
]

export default {
  name: "ClickMenuInteraction"
}

export const Default = () => ({
  router: new VueRouter({ routes }),
  props: {
    menuList
  },
  components: { ClickMenuInteraction, Icon, ContextMenu },
  render() {
    return (
      <ClickMenuInteraction>
        <Icon slot="icon" name="settings" />
        <ContextMenu slot="menu" menuList={menuList} style={{ width: "200px" }} />
      </ClickMenuInteraction>
    )
  }
})
export const Default1 = () => ({
  router: new VueRouter({ routes }),
  props: {
    menuList
  },
  components: { ClickMenuInteraction, Icon, ContextMenu },
  render() {
    return (
      <div style="display:flex;justify-content:flex-end;">
        <ClickMenuInteraction isOpen={this.isOpen} style="right:0px">
          <Icon slot="icon" name="settings" />
          <ContextMenu slot="menu" menuList={menuList} style={{ width: "200px" }} />
        </ClickMenuInteraction>
      </div>
    )
  }
})
