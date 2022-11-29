import Textarea from "./index"

export default {
  name: "Textarea"
}

export const Default = () => ({
  components: { Textarea },
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
  template: `<Textarea class="add-class" v-model="message" @focus="onFocus" />`
})
