import NavList from "./index.vue"
import { list } from "./index.stories"
import { shallowMount } from "@vue/test-utils"

describe("NavList", () => {
  const wrapper = shallowMount(NavList, {
    propsData: {
      list
    }
  })
  const listItems = Array.from(wrapper.element.querySelector("ul.list").children)

  describe("props", () => {
    it("リストを描画すること", () => {
      listItems.forEach((item, index) => {
        const labelText = item.querySelector(".label-text").textContent
        expect(labelText).toBe(list[index].name)
      })
    })
    it("isFolded が true の場合、テキストを非表示にすること", async () => {
      await wrapper.setProps({ isFolded: true })
      expect(wrapper.classes().includes("is-folded")).toBe(true)
    })
  })
  describe("ユーザーアクション", () => {
    it("リンクメニューは aタグ, ボタンメニューは buttonタグ を描画すること", () => {
      listItems.forEach((item, index) => {
        if (typeof list[index].to === "string") {
          expect(item.querySelector("router-link-stub")).not.toBe(null)
        } else if (typeof list[index].to === "function") {
          expect(item.querySelector("button")).not.toBe(null)
        }
      })
    })
  })
})
