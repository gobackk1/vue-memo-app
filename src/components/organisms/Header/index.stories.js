import Header from "./index.vue"
import { action } from "@storybook/addon-actions"
import VueRouter from "vue-router"
import { routes } from "@/router"
import store from "@/store"

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
  name: "Header",
  component: Header
}

export const WithLoginUser = () => ({
  store,
  router: new VueRouter({ routes }),
  components: { Header },
  data() {
    return {
      loginUser: {
        displayName: "testuser"
        // photoURL:
      },
      menuList,
      listViewStatus: "grid",
      statusIconMapping: {
        grid: "grid_view",
        column: "view_agenda"
      }
    }
  },
  methods: {
    onClickMenu() {
      action("click onClickMenu")()
    },
    toggleStatus() {
      action("click toggleStatus")()
    }
  },
  template: `<Header
      :loginUser="loginUser"
      :onClickMenu="onClickMenu"
      :menuList="menuList"
      :toggleStatus="toggleStatus"
      :listViewStatus="listViewStatus"
      :statusIconMapping="statusIconMapping"
    />`
})
export const WithoutLoginUser = () => ({
  render() {
    return <Header />
  }
})
