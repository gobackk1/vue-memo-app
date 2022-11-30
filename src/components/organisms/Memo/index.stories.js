import Memo from "./index"
import { action } from "@storybook/addon-actions"
import { list } from "@/components/molecules/IconsMenu/data"

export default {
  name: "Memo"
}

const Template = (arg, { argTypes }) => ({
  components: { Memo },
  props: Object.keys(argTypes),
  data() {
    return {
      body: "メモ本文ですメモ本文ですメモ本文ですメモ本文ですメモ本文ですメモ本文ですメモ本文ですメモ本文です"
    }
  },
  template: `<Memo :list="list" :memoTitle="memoTitle" :onClickMemo="onClickMemo">{{body}}</Memo>`
})

export const Default = Template.bind({})
Default.args = {
  memoTitle: "メモタイトル",
  menuIcons: list,
  onClickMemo() {
    action("click onClickMemo")()
  }
}
