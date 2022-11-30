import SideNavLayout from "./index.vue"
import { navList } from "@/devVariables"
import VueRouter from "vue-router"
import { routes } from "@/router"

export default {
  name: "SideNavLayout"
  // argTypes: {
  //   isFolded: {
  //     options: [true, false],
  //     control: {
  //       type: "radio"
  //     }
  //   }
  // }
}

const Template = (args, { argTypes }) => ({
  router: new VueRouter({ routes }),
  props: Object.keys(argTypes),
  components: { SideNavLayout },
  template: `<SideNavLayout :list="list" :isFolded="isFolded" />`
})

export const Default = Template.bind({})
Default.args = {
  isFolded: false,
  list: navList
}
