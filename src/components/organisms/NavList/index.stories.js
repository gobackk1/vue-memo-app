import NavList from "./index.vue"
import { action } from "@storybook/addon-actions"
import VueRouter from "vue-router"
import { routes } from "@/router"
import { navList } from "@/devVariables"

export default {
  name: "NavList"
}

export const Default = () => ({
  router: new VueRouter({ routes }),
  data() {
    return {
      list: navList
    }
  },
  render() {
    return <NavList list={this.list} />
  }
})
export const IsFolded = () => ({
  router: new VueRouter({ routes }),
  data() {
    return {
      list: navList
    }
  },
  render() {
    return <NavList list={this.list} isFolded={true} />
  }
})
