import HelloWorld from "./index"

export default {
  title: "HelloWorld"
}

// export const withText = () => ({
//   components: { MyButton },
//   template: '<my-button @click="action">Hello Button</my-button>',
//   methods: { action: action('clicked') }
// })

export const basic = () => ({
  render() {
    return <HelloWorld msg="this is message" />
  }
})

// export const withSomeEmoji = () => ({
//   components: { MyButton },
//   template: '<my-button>😀 😎 👍 💯</my-button>'
// })
