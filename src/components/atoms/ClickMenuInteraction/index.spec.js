import ClickMenuInteraction from "./index.vue"
import { mount } from "@vue/test-utils"
import Icon from "@/components/atoms/Icon"
import ContextMenu from "@/components/molecules/ContextMenu"

const menuList = [
  {
    name: "アバウトページへ",
    link: "/about"
  },
  {
    name: "ログアウト",
    callback: () => {
      // action("ログアウトしました")()
    }
  }
]

const IconTemplate = {
  template: '<Icon name="settings" />',
  components: { Icon }
}

const ContextMenuTemplate = {
  data() {
    return {
      menuList
    }
  },
  components: { ContextMenu },
  template: '<ContextMenu :menuList="menuList" />'
}

describe("ClickMenuInteraction", () => {
  const wrapper = mount(ClickMenuInteraction, {
    components: { ContextMenu, Icon },
    slots: {
      icon: IconTemplate,
      menu: ContextMenuTemplate
    },
    stubs: ["router-link"]
  })
  const IconComponent = wrapper.findComponent(Icon)
  const ContextMenuComponent = wrapper.findComponent(ContextMenu)
  it("スロットに渡したコンポーネントを描画すること", () => {
    expect(IconComponent.text()).toContain("settings")
    expect(ContextMenuComponent.html()).toContain(menuList[0].name)
  })
  it("メニューが表示されていないときにアイコンをクリックすると、メニューが表示されること", async () => {
    await wrapper.setData({ isOpen: false })
    await wrapper.element.querySelector(".clickable").click()
    expect(wrapper.vm.$data.isOpen).toBe(true)
    expect(ContextMenuComponent.isVisible()).toBe(true)
  })
  it("メニューが表示されているときにアイコンをクリックすると、メニューが非表示になること", async () => {
    await wrapper.setData({ isOpen: true })
    await wrapper.element.querySelector(".clickable").click()
    expect(wrapper.vm.$data.isOpen).toBe(false)
    expect(ContextMenuComponent.isVisible()).toBe(false)
  })
  it("画面中央より左に描画された時、メニューのインラインスタイルに left: 0が付与されること", async () => {
    // NOTE: テスト環境の window.innerWidth は 1024
    await wrapper.setData({ iconPosX: 400 })
    expect(wrapper.element.querySelector(".menu").style.left).toBe("0px")
  })
  it("画面中央より右に描画された時、メニューインラインスタイルに right: 0が付与されること", async () => {
    await wrapper.setData({ iconPosX: 900 })
    expect(wrapper.element.querySelector(".menu").style.right).toBe("0px")
  })
})
