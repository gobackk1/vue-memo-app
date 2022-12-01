import Avator from "./index.vue"
import { shallowMount } from "@vue/test-utils"

const sampleAvatorSrc = "/static/image/sample/sample_avator.png"
const defaultAvatorSrc = "/assets/images/icon/default_avator.png"

/**
 * TODO:
 * - propsData を渡しても :sytle が計算されない現象を調べてテストを完成させる
 * - 原因が不明の場合、backgroundURLでなくimgタグで実装する
 */

describe("Avator", () => {
  // it("srcに指定した画像を描画すること", async () => {
  //   const wrapper = shallowMount(Avator, {
  //     propsData: {
  //       avatorSrc: sampleAvatorSrc
  //     }
  //   })
  //   console.log(wrapper.element.style.backgroundImage)
  //   //TODO: propsData を渡すと :sytle が更新されない現象を調べる
  //   expect(wrapper.element.style.backgroundImage).toContain('/static/image/sample/sample_avator.png')

  // })
  it("srcを指定しなかった場合、デフォルトの画像を描画すること", () => {
    const wrapper = shallowMount(Avator)
    expect(wrapper.element.style.backgroundImage).toContain(defaultAvatorSrc)
  })
  // it("srcを取得できなかった場合、デフォルトの画像を描画すること", async() => {
  //   const wrapper = shallowMount(Avator)
  //   await wrapper.setProps({avatorSrc: './aaa'})
  //   expect(wrapper.element.style.backgroundImage).toContain(defaultAvatorSrc)
  // })
})
