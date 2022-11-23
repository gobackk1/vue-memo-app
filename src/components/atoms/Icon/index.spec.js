import { shallowMount } from "@vue/test-utils"
import Icon from "./index.vue"

describe("Iconコンポーネント", () => {
  const name = "menu"
  const sizeS = "s"
  const sizeM = "m"
  const sizeL = "l"
  const sizeXL = "xl"

  it("指定したアイコン名を子要素に描画すること", () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        name: name
      }
    })

    expect(wrapper.text()).toContain(name)
  })

  describe("アイコンサイズ", () => {
    const { iconSizeMap } = Icon.data()

    it("アイコンのサイズを指定できること", () => {
      const wrapperSizeS = shallowMount(Icon, {
        propsData: {
          size: sizeS,
          name
        }
      })
      const wrapperSizeM = shallowMount(Icon, {
        propsData: {
          size: sizeM,
          name
        }
      })
      const wrapperSizeL = shallowMount(Icon, {
        propsData: {
          size: sizeL,
          name
        }
      })
      const wrapperSizeXL = shallowMount(Icon, {
        propsData: {
          size: sizeXL,
          name
        }
      })
      expect(wrapperSizeS.classes()).toContain(iconSizeMap[sizeS])
      expect(wrapperSizeM.classes()).toContain(iconSizeMap[sizeM])
      expect(wrapperSizeL.classes()).toContain(iconSizeMap[sizeL])
      expect(wrapperSizeXL.classes()).toContain(iconSizeMap[sizeXL])
    })

    it("iconSizeMapが持つkey以外のサイズを指定した場合、サイズがmになること", () => {
      const wrapper = shallowMount(Icon, {
        propsData: {
          size: "invalidSize",
          name
        }
      })
      expect(wrapper.classes()).toContain(iconSizeMap[sizeM])
    })
  })

  it("handleClick をイベントハンドラに登録すること", async () => {
    const handleClick = jest.fn()
    const wrapper = shallowMount(Icon, {
      propsData: { handleClick, name }
    })
    await wrapper.trigger("click")
    expect(handleClick).toHaveBeenCalled()
  })

  // it("スナップショットテスト", () => {
  //   const wrapper = shallowMount(Icon, {
  //     propsData: { name: 'menu' }
  //   })
  //   expect(wrapper.element).toMatchSnapshot()
  // })
})