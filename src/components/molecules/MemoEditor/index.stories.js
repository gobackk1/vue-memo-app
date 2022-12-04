import MemoEditor from "./index"
import VModal from "vue-js-modal"
import Vue from "vue"
import { action } from "@storybook/addon-actions"
import { iconList } from "@/devVariables"
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
      list: iconList
    }
  },
  methods: {
    clickUpdate(memo) {
      action("click clickUpdate")(memo)
    }
  },
  components: { MemoEditor },
  template: `<MemoEditor :menuIcons="list" :memo="memo" @clickUpdate="clickUpdate" />`
})
export const WithModal = () => ({
  methods: {
    onClick() {
      this.$modal.show(
        {
          components: { MemoEditor },
          template: `<MemoEditor :menuIcons="list" :memo="memo" @clickUpdate="clickUpdate" />`,
          props: ["menuIcons", "memo"],
          methods: {
            clickUpdate(memo) {
              action("clickUpdate")(memo)
            }
          }
        },
        { memo: { title: "title", body: "body", id: 1 }, menuIcons: iconList },
        { height: "auto" }
      )
    }
  },
  render() {
    return <Button onClick={this.onClick}>show modal</Button>
  }
})
