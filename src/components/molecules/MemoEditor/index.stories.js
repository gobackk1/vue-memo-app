import MemoEditor from "./index"
import VModal from "vue-js-modal"
import Vue from "vue"
import { action } from "@storybook/addon-actions"
import { list } from "@/components/molecules/IconsMenu/data"
import Button from "@/components/atoms/Button"

Vue.use(VModal)

export default {
  name: "MemoEditor"
}

export const Default = () => ({
  data() {
    return {
      memo: {
        title: "title",
        body: "bodya",
        id: 1
      },
      list
    }
  },
  methods: {
    clickUpdate(memo) {
      action("click clickUpdate")(memo)
    }
  },
  components: { MemoEditor },
  template: `<MemoEditor :list="list" :memo="memo" @clickUpdate="clickUpdate" />`
})
export const WithModal = () => ({
  methods: {
    onClick() {
      this.$modal.show(
        {
          components: { MemoEditor },
          template: `<MemoEditor :list="list" :memo="memo" @clickUpdate="clickUpdate" />`,
          props: ["list", "memo"],
          methods: {
            clickUpdate(memo) {
              action("clickUpdate")(memo)
            }
          }
        },
        { memo: { title: "title", body: "body", id: 1 }, list },
        { height: "auto" }
      )
    }
  },
  render() {
    return <Button onClick={this.onClick}>show modal</Button>
  }
})
