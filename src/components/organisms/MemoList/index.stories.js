import MemoList from "./index.vue"
import { action } from "@storybook/addon-actions"
import MemoEditor from "@/components/molecules/MemoEditor"
import VModal from "vue-js-modal"
import Vue from "vue"
import { iconList } from "@/devVariables"

Vue.use(VModal)

export default {
  name: "MemoList",
  argTypes: {
    mode: {
      options: ["grid", "column"],
      control: {
        type: "radio"
      }
    }
  }
}

const memoList = [
  {
    id: 1,
    title: "memo1",
    body: "body1"
  },
  {
    id: 2,
    title: "memo2",
    body: "body2"
  },
  {
    id: 3,
    title: "memo3",
    body: "body3"
  },
  {
    id: 4,
    title: "memo4",
    body: "body4"
  }
]

const Template = (args, { argTypes }) => ({
  components: { MemoList },
  props: Object.keys(argTypes),
  data() {
    return {
      memoList,
      iconMenu: [
        {
          name: "delete",
          callback() {
            action("delete")()
          }
        },
        {
          name: "archive",
          callback() {
            action("archive")()
          }
        }
      ],
      onClickMemo(memo) {
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
          { memo, list: iconList },
          { height: "auto" }
        )
      }
    }
  },
  template: `<MemoList :mode="mode" :memoList="memoList" :onClickMemo="onClickMemo" :menuIcons="iconMenu" />`
})

export const Default = Template.bind({})

Default.args = {
  mode: "grid"
}
