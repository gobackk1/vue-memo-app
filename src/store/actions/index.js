import { firestoreAxios } from "@/axios"

const actions = {
  setLoginUser({ commit }, user) {
    commit("setLoginUser", user)
  },
  async createMemo({ commit, getters }, memo) {
    const data = { ...memo, status: "live" }
    const response = await firestoreAxios.post(`/users/${getters.uid}/memos`, {
      fields: {
        title: { stringValue: data.title },
        body: { stringValue: data.body },
        status: { stringValue: data.status }
      }
    })
    const id = response.data.name.split("memos/")[1]
    commit("addMemo", { id, ...data })
  },
  async fetchMemos({ commit, getters }) {
    const response = await firestoreAxios.get(`/users/${getters.uid}/memos`)

    response.data.documents.forEach(({ name, fields }) => {
      commit("addMemo", {
        id: name.split("memos/")[1],
        title: fields.title.stringValue,
        body: fields.body.stringValue,
        status: fields.status.stringValue
      })
    })
  },
  async moveTo({ commit, getters }, { status, memo }) {
    await firestoreAxios.patch(`/users/${getters.uid}/memos/${memo.id}`, {
      fields: {
        title: { stringValue: memo.title },
        body: { stringValue: memo.body },
        status: { stringValue: status }
      }
    })
    commit("updateMemo", { ...memo, status })
  },
  async deleteMemo({ commit, getters }, { id }) {
    await firestoreAxios.delete(`/users/${getters.uid}/memos/${id}`)
    commit("deleteMemo", id)
  },
  async updateMemo({ commit, getters }, memo) {
    await firestoreAxios.patch(`/users/${getters.uid}/memos/${memo.id}`, {
      fields: {
        title: { stringValue: memo.title },
        body: { stringValue: memo.body },
        status: { stringValue: memo.status }
      }
    })
    commit("updateMemo", memo)
  }
}

export default actions
