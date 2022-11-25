import Card from "./index.vue"

export default {
  name: "Card",
  component: Card
}

export const Default = () => ({
  render() {
    return (
      <Card>
        カードの本文です。カードの本文です。カードの本文です。カードの本文です。
        asdfasdfasfasdfasdfasdfasdfカードの本文です。カードの本文です。カードの本文です。
        カードの本文です。asdfasdfasfasdfasdfasdfasdasdfasdfasfasdfasdfasdfasdasd
        fasdfasfasdfasdfasdfasdasdfasdfasfasdfasdfasdfasdf
      </Card>
    )
  }
})
