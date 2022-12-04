import Vue from "vue"
import Vuex from "vuex"
import firebase from "firebase"

Vue.use(Vuex)

export const store = {
  state: {
    currentListView: "grid",
    loginUser: null,
    isFoldedSideNav: false,
    memoList: []
  },
  getters: {
    uid: (state) => state.loginUser.uid,
    getMemosByStatus: (state) => (status) => state.memoList.filter((memo) => memo.status === status)
  },
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
    },
    addMemo(state, payload) {
      state.memoList.push(payload)
    },
    updateMemo(state, payload) {
      const index = state.memoList.findIndex((memo) => memo.id === payload.id)
      state.memoList = [...state.memoList.slice(0, index), payload, ...state.memoList.slice(index + 1)]
    },
    deleteMemo(state, id) {
      const index = state.memoList.findIndex((memo) => memo.id === id)
      state.memoList.splice(index, 1)
    }
  },
  actions: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    async logout({ commit }) {
      await firebase.auth().signOut()
      commit("logoutUser")
    },
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user)
    },
    async createMemo({ commit, getters }, memo) {
      const data = { ...memo, status: "live" }
      const { id } = await firebase.firestore().collection(`/users/${getters.uid}/memos/`).add(data)
      commit("addMemo", { id, ...data })
    },
    async fetchMemos({ commit, getters }) {
      const snapshot = await firebase.firestore().collection(`/users/${getters.uid}/memos/`).get()
      snapshot.forEach((doc) => {
        commit("addMemo", { id: doc.id, ...doc.data() })
      })
    },
    async moveTo({ commit, getters }, { status, memo }) {
      const { id, ...archived } = { ...memo, status }
      await firebase.firestore().collection(`/users/${getters.uid}/memos`).doc(id).update(archived)
      commit("updateMemo", { id, ...archived })
    },
    async deleteMemo({ commit, getters }, { id }) {
      await firebase.firestore().collection(`/users/${getters.uid}/memos`).doc(id).delete()
      commit("deleteMemo", id)
    }
  },
  modules: {}
}

export default new Vuex.Store(store)
