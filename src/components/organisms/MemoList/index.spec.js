import MemoList from "./index.vue"
import { shallowMount } from "@vue/test-utils"

const memoList = [
  {
    id: 1,
    title: "memo1",
    body: "body1"
  },
  {
    id: 2,
    title: "memo2",
    body: "body2"
  },
  {
    id: 3,
    title: "memo3",
    body: "body3"
  },
  {
    id: 4,
    title: "memo4",
    body: "body4"
  }
]

describe("MemoList", () => {
  describe("props", () => {
    const wrapper = shallowMount(MemoList, {
      propsData: {
        memoList,
        mode: "grid"
      }
    })
    it("カラムビューとグリッドビューとで切り替えられること", async () => {
      expect(wrapper.classes().join(" ")).toContain("grid")
      await wrapper.setProps({ mode: "column" })
      expect(wrapper.classes().join(" ")).toContain("column")
    })
    it("memoのリストを描画すること", () => {
      expect(wrapper.element.children.length).toBe(4)
    })
  })
})
