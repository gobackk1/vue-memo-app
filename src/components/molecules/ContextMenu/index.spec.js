import ContextMenu from "./index.vue"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import VueRouter from "vue-router"

const localVue = createLocalVue()
localVue.use(VueRouter)

const callbackStub = jest.fn()

const menuList = [
  {
    name: "アバウトページへ",
    link: "/about"
  },
  {
    name: "ログアウト",
    callback: callbackStub
  }
]

describe("ContextMenu", () => {
  const wrapper = shallowMount(ContextMenu, {
    propsData: { menuList },
    localVue
  })

  it("リストレンダリングすること", () => {
    expect(wrapper.html()).toContain(menuList[0].name)
    expect(wrapper.html()).toContain(menuList[1].name)
  })
  it("linkが渡ってきた場合に router-link を描画すること", () => {
    expect(wrapper.findComponent({ name: "router-link" }).text()).toBe(menuList[0].name)
  })
  it("callbackが渡ってきた場合に button を描画し実行できること", () => {
    const buttonElement = wrapper.element.querySelector("button")
    buttonElement.click()
    expect(wrapper.contains("button")).toBe(true)
    expect(callbackStub).toHaveBeenCalledTimes(1)
  })
})
