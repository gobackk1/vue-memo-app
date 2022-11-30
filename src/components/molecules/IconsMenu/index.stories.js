import IconsMenu from "./index.vue"
import { iconList } from "@/devVariables"

export default {
  name: "IconsMenu"
}

export const Default = () => ({
  data() {
    return {
      list: iconList
    }
  },
  render() {
    return <IconsMenu list={this.list} />
  }
})
