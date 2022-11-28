import { shallowMount } from "@vue/test-utils"
import Header from "./index"

describe("Header", () => {
  describe("props", () => {
    it("loginUserがnullではない時、ハンバーガーメニューとツールバーを表示すること", () => {
      const wrapper = shallowMount(Header, {
        propsData: {
          loginUser: {
            displayName: "test"
          }
        }
      })
      const menuEl = wrapper.element.querySelector(".menu")
      const toolbarEl = wrapper.element.querySelector(".toolbar")
      expect(menuEl.children.length).not.toBe(0)
      expect(toolbarEl.children.length).not.toBe(0)
    })
    it("loginUserがnullの時、ハンバーガーメニューとツールバーを表示しないこと", () => {
      const wrapper = shallowMount(Header, {
        propsData: {
          loginUser: null
        }
      })
      const menuEl = wrapper.element.querySelector(".menu")
      const toolbarEl = wrapper.element.querySelector(".toolbar")
      expect(menuEl).toBe(null)
      expect(toolbarEl).toBe(null)
    })
  })
})
