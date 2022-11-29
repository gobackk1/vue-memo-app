import IconsMenu from "./index.vue"
import { list } from "./data"

export default {
  name: "IconsMenu"
}

export const Default = () => ({
  data() {
    return {
      list
    }
  },
  render() {
    return <IconsMenu list={this.list} />
  }
})
