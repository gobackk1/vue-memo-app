import mutations from "./index"

describe("mutations", () => {
  let state, memo

  beforeEach(() => {
    state = {
      loginUser: null,
      isFoldedSideNav: false,
      memoList: [],
      currentListView: "1"
    }

    memo = {
      id: "memo",
      title: "memo",
      body: "memo",
      status: "live"
    }
  })

  it("setLoginUser", () => {
    const user = {
      uid: "uid",
      displayName: "test_user"
    }
    mutations.setLoginUser(state, user)
    expect(state.loginUser).toBe(user)
  })
  it("toggleListView", () => {
    const payload = {
      1: "",
      2: "",
      3: ""
    }
    mutations.toggleListView(state, payload)
    expect(state.currentListView).toBe("2")
    mutations.toggleListView(state, payload)
    expect(state.currentListView).toBe("3")
    mutations.toggleListView(state, payload)
    expect(state.currentListView).toBe("1")
  })
  it("logoutUser", () => {
    state.loginUser = {}
    mutations.logoutUser(state)
    expect(state.loginUser).toBe(null)
  })
  it("toggleSideNav", () => {
    mutations.toggleSideNav(state)
    expect(state.isFoldedSideNav).toBe(true)
    mutations.toggleSideNav(state)
    expect(state.isFoldedSideNav).toBe(false)
  })
  it("addMemo", () => {
    mutations.addMemo(state, memo)
    expect(state.memoList).toHaveLength(1)
    expect(state.memoList[0]).toBe(memo)
  })
  it("updateMemo", () => {
    mutations.addMemo(state, memo)
    memo.title = "update"
    mutations.updateMemo(state, memo)
    expect(state.memoList[0].title).toBe("update")
  })
  it("deleteMemo", () => {
    mutations.addMemo(state, memo)
    expect(state.memoList).toHaveLength(1)
    mutations.deleteMemo(state, memo.id)
    expect(state.memoList).toHaveLength(0)
  })
})
