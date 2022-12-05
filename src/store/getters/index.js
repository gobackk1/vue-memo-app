const getters = {
  uid: (state) => state.loginUser.uid,
  getMemosByStatus: (state) => (status) => state.memoList.filter((memo) => memo.status === status)
}

export default getters
