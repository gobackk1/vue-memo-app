import Button from "./index.vue"
import { shallowMount } from "@vue/test-utils"

describe("Button", () => {
  const buttonLabel = "ボタンラベル"
  const wrapper = shallowMount(Button, {
    slots: {
      default: buttonLabel
    }
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
  it("clickイベントをemitすること", async () => {
    await wrapper.trigger("click")
    expect(wrapper.emitted().click.length).toBe(1)
  })
})
