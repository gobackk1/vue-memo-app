import NavList from "./index.vue"
import { action } from "@storybook/addon-actions"
import VueRouter from "vue-router"
import { routes } from "@/router"

export const list = [
  {
    id: 1,
    name: "メモ",
    icon: "sticky_note_2",
    to: "/memos"
  },
  {
    id: 2,
    name: "ラベル1",
    icon: "label",
    to: "/memos/labelId"
  },
  {
    id: 3,
    name: "ラベルの編集",
    icon: "edit",
    to() {
      action("clickしました")()
    }
  },
  {
    id: 4,
    name: "アーカイブ",
    icon: "archive",
    to: "/archive"
  },
  {
    id: 5,
    name: "ゴミ箱",
    icon: "delete",
    to: "/trash"
  }
]

export default {
  name: "NavList"
}

export const Default = () => ({
  router: new VueRouter({ routes }),
  data() {
    return {
      list
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
      list
    }
  },
  render() {
    return <NavList list={this.list} isFolded={true} />
  }
})
