import Input from "./index"
import { shallowMount } from "@vue/test-utils"

describe("Input", () => {
  describe("props", () => {
    it("valueを渡せること", () => {
      const wrapper = shallowMount(Input, {
        propsData: {
          value: "value"
        }
      })
      expect(wrapper.element.value).toBe("value")
    })
  })
})
