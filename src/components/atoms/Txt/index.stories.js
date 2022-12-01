import Txt from "./index"

export default {
  name: "Txt",
  argTypes: {
    role: {
      options: ["info", "danger", "warning", "success"],
      type: "select"
    },
    size: {
      options: ["s", "m", "l", "xl"],
      type: "select"
    }
  }
}

export const Default = (args, { argTypes }) => ({
  components: { Txt },
  props: Object.keys(argTypes),
  template: `<Txt :role="role" :size="size" :tag="tag">本文です</Txt>`
})

Default.args = {
  role: "info",
  size: "l",
  tag: "p"
}
