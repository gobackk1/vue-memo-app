import Button from "./index.vue"
import { shallowMount } from "@vue/test-utils"

describe("Button", () => {
  const onClickButton = jest.fn()
  const buttonLabel = "ボタンラベル"
  const wrapper = shallowMount(Button, {
    propsData: {
      onClickButton
    },
    slots: {
      default: buttonLabel
    }
  })
  it("子要素を描画すること", () => {
    expect(wrapper.text()).toBe(buttonLabel)
  })
  it("propsで指定した色を描画すること", async () => {
    expect(wrapper.classes().includes("root-primary")).toBe(true)
    await wrapper.setProps({ color: "warning" })
    expect(wrapper.classes().includes("root-warning")).toBe(true)
    await wrapper.setProps({ color: "danger" })
    expect(wrapper.classes().includes("root-danger")).toBe(true)
    await wrapper.setProps({ color: "primary" })
    expect(wrapper.classes().includes("root-primary")).toBe(true)
  })
  it("propsで渡したコールバックを実行すること", async () => {
    await wrapper.trigger("click")
    expect(onClickButton).toHaveBeenCalledTimes(1)
  })
})
