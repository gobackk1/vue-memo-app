import Button from "./index.vue"
import { action } from "@storybook/addon-actions"

export default {
  name: "Button",
  argTypes: {
    color: {
      options: ["primary", "warning", "danger"],
      control: {
        type: "select"
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Button },
  data() {
    return {
      onClickButton() {
        action("click")()
      }
    }
  },
  props: Object.keys(argTypes),
  template: `<Button v-bind="$props" @click="onClickButton" type="button">default</Button>`
})

export const Default = Template.bind({})
Default.args = {
  color: "primary"
}
export const Warning = Template.bind({})
Warning.args = {
  color: "warning"
}
export const Danger = Template.bind({})
Danger.args = {
  color: "danger"
}
