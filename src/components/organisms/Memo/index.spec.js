import Memo from "./index"
import { shallowMount } from "@vue/test-utils"

describe("Memo", () => {
  const onClickMemo = jest.fn()
  describe("props", () => {
    const wrapper = shallowMount(Memo, {
      propsData: {
        memoTitle: "メモタイトル",
        onClickMemo
      },
      slots: {
        default: "メモ本文"
      }
    })
    it("memoTitle を描画すること", () => {
      expect(wrapper.text()).toContain("メモタイトル")
    })
    it("アイコンメニュー以外のメモ領域をクリックしたら、onClickMemo を実行すること", async () => {
      await wrapper.findComponent({ ref: "area-memo" }).trigger("click")
      expect(onClickMemo).toHaveBeenCalledTimes(1)
    })
  })
})
