import Txt from "./index"
import { shallowMount } from "@vue/test-utils"

describe("Txt", () => {
  describe("props", () => {
    const wrapper = shallowMount(Txt, {
      propsData: {
        role: "info",
        size: "l",
        tag: "span"
      }
    })
    it("roleに応じてクラスをつけること", () => {
      expect(wrapper.classes().includes("color-info")).toBe(true)
    })
    it("sizeに応じてクラスをつけること", () => {
      expect(wrapper.classes().includes("size-l")).toBe(true)
    })
    it("tagに応じたHTML要素を描画すること", () => {
      expect(wrapper.contains("span")).toBe(true)
    })
  })
})
