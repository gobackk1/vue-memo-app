import SideNavLayout from "./index"
import { shallowMount } from "@vue/test-utils"

describe("SideNavLayout", () => {
  describe("props", () => {
    it("isFolded の値に応じて is-folded クラスを着脱すること", async () => {
      const wrapper = shallowMount(SideNavLayout, {
        propsData: {
          isFolded: true
        }
      })
      expect(wrapper.classes().includes("is-folded")).toBe(true)
      await wrapper.setProps({ isFolded: false })
      expect(wrapper.classes().includes("is-folded")).toBe(false)
    })
  })
})
