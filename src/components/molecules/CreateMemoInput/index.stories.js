import CreateMemoInput from "./index"
import { action } from "@storybook/addon-actions"

export default {
  name: "CreateMemoInput"
}

export const Default = () => ({
  data() {
    return {
      createMemo(memo) {
        action("click createMemo")(memo)
      }
    }
  },
  render() {
    return <CreateMemoInput createMemo={this.createMemo} />
  }
})
