import Vue from "vue"
import Vuex from "vuex"
import firebase from "firebase"
import { memoList } from "@/devVariables"

Vue.use(Vuex)

export const store = {
  state: {
    currentListView: "grid",
    loginUser: null,
    isFoldedSideNav: false,
    memoList
  },
  getters: {},
  mutations: {
    toggleListView(state, payload) {
      const statusKeys = Object.keys(payload)
      let nextIndex = statusKeys.indexOf(state.currentListView) + 1
      nextIndex = nextIndex >= statusKeys.length ? 0 : nextIndex
      state.currentListView = statusKeys[nextIndex]
    },
    setLoginUser(state, payload) {
      state.loginUser = payload
    },
    logoutUser(state) {
      state.loginUser = null
    },
    toggleSideNav(state) {
      state.isFoldedSideNav = !state.isFoldedSideNav
    }
  },
  actions: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    async logout({ commit }) {
      const logout = await firebase.auth().signOut()
      console.log(logout)
      commit("logoutUser")
    },
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user)
    }
  },
  modules: {}
}

export default new Vuex.Store(store)
