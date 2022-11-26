import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = {
  state: {
    currentListView: "grid"
  },
  getters: {},
  mutations: {
    toggleListView(state, payload) {
      const statusKeys = Object.keys(payload)
      let nextIndex = statusKeys.indexOf(state.currentListView) + 1
      nextIndex = nextIndex >= statusKeys.length ? 0 : nextIndex
      state.currentListView = statusKeys[nextIndex]
    }
  },
  actions: {},
  modules: {}
}

export default new Vuex.Store(store)
