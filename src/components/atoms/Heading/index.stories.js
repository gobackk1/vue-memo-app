import Heading from "./index.vue"

export default {
  title: "Heading"
}

export const Default = () => ({
  render() {
    return <Heading>デフォルト</Heading>
  }
})

export const Level1VisualLevel1 = () => ({
  render() {
    return (
      <Heading level="1" visualLevel="1">
        見出しレベル１、見た目レベル１
      </Heading>
    )
  }
})

export const Level4 = () => ({
  render() {
    return <Heading level="4">見出しレベル4、見た目レベル未設定</Heading>
  }
})

export const Level0VisualLevel7 = () => ({
  render() {
    return (
      <Heading level="0" visualLevel="7">
        見出しレベル0、見た目レベル7
      </Heading>
    )
  }
})
