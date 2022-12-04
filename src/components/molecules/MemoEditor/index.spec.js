import MemoEditor from "./index"
import { shallowMount, mount } from "@vue/test-utils"

describe("MemoEditor", () => {
  describe("props", () => {
    it("メモタイトルと本文を描画すること", () => {
      const wrapper = shallowMount(MemoEditor, {
        propsData: {
          memo: {
            title: "title",
            body: "body"
          },
          menuIcons: []
        }
      })

      const input = wrapper.findComponent({ ref: "input" })
      const textarea = wrapper.findComponent({ ref: "textarea" })

      expect(input.attributes().value).toBe("title")
      expect(textarea.attributes().value).toBe("body")
    })
  })

  describe("ユーザーアクション", () => {
    let clickUpdate, wrapper, input, textarea

    beforeEach(async () => {
      clickUpdate = jest.fn()
      wrapper = mount(MemoEditor, {
        propsData: {
          memo: {
            title: "title",
            body: "body"
          },
          menuIcons: []
        },
        listeners: {
          clickUpdate
        }
      })
      input = await wrapper.findComponent({ ref: "input" })
      textarea = await wrapper.findComponent({ ref: "textarea" })
    })

    it("ユーザーがメモのタイトルを入力できること", async () => {
      await input.setValue("title update")
      expect(input.element.value).toBe("title update")
    })
    it("ユーザーがメモの本文を入力できること", async () => {
      await textarea.setValue("body update")
      expect(textarea.element.value).toBe("body update")
    })
    it("更新ボタンを押すと、更新後のmemoを引数にとるコールバックが実行されること", async () => {
      const editedMemo = {
        title: "edited title",
        body: "edited body"
      }
      await input.setValue(editedMemo.title)
      await textarea.setValue(editedMemo.body)
      await wrapper.findComponent({ ref: "button-update" }).trigger("click")
      expect(clickUpdate).toBeCalledWith(editedMemo)
    })
  })
})
