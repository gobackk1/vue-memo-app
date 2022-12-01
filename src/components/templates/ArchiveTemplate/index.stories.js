import ArchiveTemplate from "./index"
import { routes } from "@/router"
import VueRouter from "vue-router"
import MemoList from "@/components/organisms/MemoList"
import { memoList } from "@/devVariables"
import { action } from "@storybook/addon-actions"

export default {
  name: "ArchiveTemplate"
}

const Template = (args, { argTypes }) => ({
  components: { ArchiveTemplate, MemoList },
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
    <ArchiveTemplate :isFolded="isFolded">
      <MemoList
        :memoList="memoList"
        :mode="currentListView"
        :menuIcons="iconMenu"
        :onClickMemo="showModal"
        slot="contents"
      />
    </ArchiveTemplate>
  `
})

export const Default = Template.bind({})
Default.args = {
  isFolded: false,
  currentListView: "grid"
}
