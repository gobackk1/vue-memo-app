import ToggleStatusIcons from "./index.vue"
import { mount } from "@vue/test-utils"
import Icon from "@/components/atoms/Icon"

describe("ToggleStatusIcons", () => {
  const statusIconMapping = {
    grid: "grid_view",
    column: "view_agenda",
    settings: "settings"
  }
  const toggleStatus = jest.fn()
  const wrapper = mount(ToggleStatusIcons, {
    components: { Icon },
    propsData: {
      status: "grid",
      statusIconMapping,
      toggleStatus
    }
  })

  it("mappingをもとにstatusに渡したアイコンを描画すること", async () => {
    console.log(wrapper.html())
    expect(wrapper.findComponent(Icon).text()).toBe(statusIconMapping["grid"])
    await wrapper.setProps({ status: "column" })
    expect(wrapper.findComponent(Icon).text()).toBe(statusIconMapping["column"])
    await wrapper.setProps({ status: "settings" })
    expect(wrapper.findComponent(Icon).text()).toBe(statusIconMapping["settings"])
  })
  it("propsに渡したtoggleStatusを実行すること", async () => {
    await wrapper.findComponent(Icon).trigger("click")
    expect(toggleStatus).toHaveBeenCalledTimes(1)
  })
})
