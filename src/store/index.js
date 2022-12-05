import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

export const store = {
  state,
  getters,
  mutations,
  actions,
  modules: {}
}

export default new Vuex.Store(store)
