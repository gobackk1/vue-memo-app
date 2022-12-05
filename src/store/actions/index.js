import firebase from "firebase"

const actions = {
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
  },
  async updateMemo({ commit, getters }, memo) {
    const { id, ...other } = memo
    await firebase.firestore().collection(`/users/${getters.uid}/memos`).doc(id).update(other)
    commit("updateMemo", { id, ...other })
  }
}

export default actions
