import getters from "./index"

describe("getters", () => {
  const liveMemo = {
    id: "live",
    status: "live",
    title: "live",
    body: "live"
  }
  const archivedMemo = {
    id: "archived",
    status: "archived",
    title: "archived",
    body: "archived"
  }
  const trashedMemo = {
    id: "trashed",
    status: "trashed",
    title: "trashed",
    body: "trashed"
  }
  const state = {
    loginUser: {
      uid: "uid"
    },
    memoList: [liveMemo, archivedMemo, trashedMemo]
  }

  it("uid", () => {
    expect(getters.uid(state)).toBe(state.loginUser.uid)
  })
  it("getMemosByStatus", () => {
    expect(getters.getMemosByStatus(state)("live")).toHaveLength(1)
    expect(getters.getMemosByStatus(state)("live")[0]).toBe(liveMemo)
    expect(getters.getMemosByStatus(state)("archived")).toHaveLength(1)
    expect(getters.getMemosByStatus(state)("archived")[0]).toBe(archivedMemo)
    expect(getters.getMemosByStatus(state)("trashed")).toHaveLength(1)
    expect(getters.getMemosByStatus(state)("trashed")[0]).toBe(trashedMemo)
  })
})
