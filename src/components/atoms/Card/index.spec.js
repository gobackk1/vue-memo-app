import Card from "./index.vue"
import { shallowMount } from "@vue/test-utils"

describe("Card", () => {
  it("デフォルトスロットを描画すること", () => {
    const text = "カード本文です"
    const wrapper = shallowMount(Card, {
      slots: {
        default: text
      }
    })
    expect(wrapper.text()).toBe(text)
  })
})
