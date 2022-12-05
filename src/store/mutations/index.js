const mutations = {
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
}

export default mutations
