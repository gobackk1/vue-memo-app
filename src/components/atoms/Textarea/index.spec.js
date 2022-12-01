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
  describe("ユーザーアクション", () => {
    const wrapper = shallowMount(Textarea, {
      attachTo: document.body
    })

    it("ユーザーがフォーカスした時に focus イベントを発火すること", async () => {
      await wrapper.trigger("focus")
      expect(wrapper.emitted().focus.length).toBe(1)
    })
    it("ユーザーがインプットに入力した時に update イベントを発火すること", async () => {
      wrapper.setValue("a")
      wrapper.setValue("ab")
      expect(wrapper.emitted().input.length).toBe(2)
    })
  })
})
