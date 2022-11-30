import MemosTemplate from "./index"
import { routes } from "@/router"
import VueRouter from "vue-router"
import MemoList from "@/components/organisms/MemoList"
import CreateMemoInput from "@/components/molecules/CreateMemoInput"
import { memoList } from "@/devVariables"
import { action } from "@storybook/addon-actions"

export default {
  name: "MemosTemplate"
}

export const Template = (args, { argTypes }) => ({
  components: { MemosTemplate, CreateMemoInput, MemoList },
  router: new VueRouter({ routes }),
  props: Object.keys(argTypes),
  data() {
    return {
      memoList,
      iconMenu: [
        {
          name: "delete",
          callback: function () {
            action("delete")()
          }
        },
        {
          name: "archive",
          callback: function () {
            action("archive")()
          }
        }
      ],
      showModal: function () {
        action("showModal")()
      }
    }
  },
  template: `
    <MemosTemplate :isFolded="isFolded">
      <CreateMemoInput slot="create-memo-input" />
      <MemoList
        :memoList="memoList"
        :mode="currentListView"
        :menuIcons="iconMenu"
        :onClickMemo="showModal"
        slot="contents"
      />
    </MemosTemplate>
  `
})

export const Default = Template.bind({})
Default.args = {
  isFolded: false,
  currentListView: "grid"
}
