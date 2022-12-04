import IconsMenu from "./index.vue"
import { list } from "./data"
import { mount } from "@vue/test-utils"
import Icon from "@/components/atoms/Icon"

describe("IconsMenu", () => {
  const callback1 = jest.fn()
  const callback2 = jest.fn()
  const callback3 = jest.fn()
  list[0].callback = callback1
  list[1].callback = callback2
  list[2].callback = callback3

  describe("props", () => {
    const wrapper = mount(IconsMenu, {
      propsData: {
        list
      }
    })

    const icon1 = wrapper.findAllComponents(Icon).at(0)
    const icon2 = wrapper.findAllComponents(Icon).at(1)
    const icon3 = wrapper.findAllComponents(Icon).at(2)
    it("アイコンを描画すること", () => {
      expect(icon1.text()).toBe(list[0].name)
      expect(icon2.text()).toBe(list[1].name)
      expect(icon3.text()).toBe(list[2].name)
    })

    it("アイコンをクリックするとlist.callback を実行すること", async () => {
      await Promise.all([icon1.trigger("click"), icon2.trigger("click"), icon3.trigger("click")])
      expect(callback1).toHaveBeenCalledTimes(1)
      expect(callback2).toHaveBeenCalledTimes(1)
      expect(callback3).toHaveBeenCalledTimes(1)
    })
  })
})
