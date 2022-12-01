import Memo from "./index"
import { action } from "@storybook/addon-actions"
import { iconList } from "@/devVariables"

export default {
  name: "Memo"
}

const Template = (arg, { argTypes }) => ({
  components: { Memo },
  props: Object.keys(argTypes),
  template: `<Memo :list="list" :memo="memo" :onClickMemo="onClickMemo"></Memo>`
})

export const Default = Template.bind({})
Default.args = {
  memo: {
    title: "メモタイトル",
    body: "メモ本文"
  },
  menuIcons: iconList,
  onClickMemo() {
    action("click onClickMemo")()
  }
}
