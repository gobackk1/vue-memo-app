import SideNavLayout from "./index.vue"
import { navList } from "@/devVariables"
import VueRouter from "vue-router"
import { routes } from "@/router"
import NavList from "@/components/organisms/NavList"

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
  components: { SideNavLayout, NavList },
  template: `
    <SideNavLayout :isFolded="isFolded">
      <NavList slot="side" :list="list" :isFolded="isFolded" />
      <div slot="contents">ここはコンテンツエリア</div>
    </SideNavLayout>
  `
})

export const Default = Template.bind({})
Default.args = {
  isFolded: false,
  list: navList
}
