import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentListView: "column"
  },
  getters: {},
  mutations: {
    toggleListView(state) {
      state.currentListView = state.currentListView === "grid" ? "column" : "grid"
    }
  },
  actions: {},
  modules: {}
})
