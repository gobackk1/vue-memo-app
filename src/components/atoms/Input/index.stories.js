import Input from "./index"

export default {
  name: "Input"
}

export const Default = () => ({
  components: { Input },
  data() {
    return {
      message: "message"
    }
  },
  methods: {
    onFocus() {
      console.log("focus")
    }
  },
  updated() {
    console.log(this.message)
  },
  template: `<Input class="add-class" v-model="message" @focus="onFocus" />`
})
