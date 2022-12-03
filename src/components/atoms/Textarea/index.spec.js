import Textarea from "./index"
import { shallowMount } from "@vue/test-utils"

describe("Textarea", () => {
  describe("props", () => {
    it("valueを渡せること", () => {
      const wrapper = shallowMount(Textarea, {
        propsData: {
          value: "value"
        }
      })
      expect(wrapper.element.value).toBe("value")
    })
  })
})
