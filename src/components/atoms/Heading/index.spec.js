import { shallowMount } from "@vue/test-utils"
import Heading from "./index.vue"

describe("Headingコンポーネント", () => {
  it("指定したlevelとvisualLevelをもとに描画すること", () => {
    const wrapper = shallowMount(Heading, {
      propsData: {
        level: "1",
        visualLevel: "5"
      }
    })
    expect(wrapper.classes()).toContain(`h5`)
    expect(wrapper.html()).toContain(`h1`)
  })

  it("1未満の level や visualLevel は 1 とする", () => {
    const wrapper = shallowMount(Heading, {
      propsData: {
        level: "0",
        visualLevel: "0"
      }
    })

    expect(wrapper.element.tagName.toLowerCase()).toBe(`h1`)
    expect(wrapper.element.classList.contains("h1")).toBe(true)
  })
  it("6より大きい level や visualLevel は 6 とする", () => {
    const wrapper = shallowMount(Heading, {
      propsData: {
        level: "7",
        visualLevel: "7"
      }
    })

    expect(wrapper.element.tagName.toLowerCase()).toBe(`h6`)
    expect(wrapper.element.classList.contains("h6")).toBe(true)
  })

  it("子要素を描画すること", () => {
    const childElement = "子要素"
    const wrapper = shallowMount(Heading, {
      slots: {
        default: childElement
      }
    })
    expect(wrapper.text()).toContain(childElement)
  })
})
