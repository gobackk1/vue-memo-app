import Memo from "./index"
import { action } from "@storybook/addon-actions"

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
  template: `<Memo :memoTitle="memoTitle" :onClickDelete="onClickDelete" :onClickArchive="onClickArchive" :onClickMemo="onClickMemo">{{body}}</Memo>`
})

export const Default = Template.bind({})
Default.args = {
  memoTitle: "メモタイトル",
  onClickArchive() {
    action("click onClickArchive")()
  },
  onClickDelete() {
    action("click onClickDelete")()
  },
  onClickMemo() {
    action("click onClickMemo")()
  }
}
