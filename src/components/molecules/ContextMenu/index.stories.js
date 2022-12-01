import ContextMenu from "./index.vue"
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
  name: "ContextMenu"
}

export const Default = () => ({
  router: new VueRouter({ routes }),
  render() {
    return <ContextMenu menuList={menuList} />
  }
})
