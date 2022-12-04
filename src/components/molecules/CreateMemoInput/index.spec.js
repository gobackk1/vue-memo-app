import CreateMemoInput from "./index"
import { mount } from "@vue/test-utils"

describe("CreateMemoInput", () => {
  describe("props", () => {
    it("createMemoの引数のチェック", async () => {
      const createMemo = jest.fn()
      const memoData = {
        title: "title",
        body: "body"
      }
      const wrapper = mount(CreateMemoInput, {
        propsData: {
          createMemo
        }
      })
      await wrapper.setData({ isEditing: true, ...memoData })
      await wrapper.findComponent({ ref: "create-button" }).trigger("click")
      expect(createMemo).toBeCalledWith(memoData)
    })
  })
  describe("ユーザーアクション", () => {
    const createMemo = jest.fn()
    const memoData = {
      title: "title",
      body: "body"
    }
    let wrapper

    beforeEach(() => {
      wrapper = mount(CreateMemoInput, {
        propsData: {
          createMemo
        },
        attachTo: document.body
      })
    })

    afterEach(() => {
      wrapper.destroy()
    })

    it("インプットにフォーカスすると、表示が追加されること", async () => {
      await wrapper.setData({ isEditing: false, ...memoData })
      await wrapper.findComponent({ ref: "title" }).trigger("focus")
      const buttonWrapper = wrapper.findComponent({ ref: "create-button" })
      expect(wrapper.findComponent({ ref: "body" }).isVisible()).toBe(true)
      expect(buttonWrapper.isVisible()).toBe(true)
    })
    it("インプットにフォーカスすると、テキストエリアにフォーカスが移ること", async () => {
      await wrapper.findComponent({ ref: "title" }).trigger("focus")
      expect(document.activeElement.className).toContain("input-body")
    })
    it("コンポーネントの外をクリックすると、インプット以外が非表示になること", async () => {
      await wrapper.setData({ isEditing: true, ...memoData })
      const div = document.createElement("div")
      div.className = "mock-element"
      document.body.appendChild(div)
      await div.click()
      expect(wrapper.findComponent({ ref: "body" }).isVisible()).toBe(false)
      expect(wrapper.findComponent({ ref: "create-button" }).isVisible()).toBe(false)
    })
    it("タイトルと本文が未入力の時は、ボタンを無効にすること", async () => {
      await wrapper.setData({ isEditing: true, title: "", body: "" })
      expect(wrapper.findComponent({ ref: "create-button" }).attributes().disabled).not.toBe(undefined)
    })
    it("タイトルか本文かのどちらかが入力してある時、ボタンを有効にすること", async () => {
      await wrapper.setData({ isEditing: true, title: "title", body: "" })
      expect(wrapper.findComponent({ ref: "create-button" }).attributes().disabled).toBe(undefined)
      await wrapper.setData({ isEditing: true, title: "", body: "body" })
      expect(wrapper.findComponent({ ref: "create-button" }).attributes().disabled).toBe(undefined)
    })
  })
})
