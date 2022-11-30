import MemoTemplate from "./index.vue"
import { shallowMount } from "@vue/test-utils"

describe("MemoTemplate", () => {
  it("isFoldedの値によってCSSクラスを着脱すること", async () => {
    const wrapper = shallowMount(MemoTemplate, {
      propsData: {
        isFolded: false
      }
    })
    expect(wrapper.classes().join(" ")).not.toContain("isFolded")
    await wrapper.setProps({ isFolded: true })
    expect(wrapper.classes().join(" ")).toContain("isFolded")
  })
})
