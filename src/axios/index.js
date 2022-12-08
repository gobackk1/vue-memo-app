import axios from "axios"
import { FIRESTORE_API_ORIGIN, PROJECT_ID } from "@/constant"
import AppFirebase from "@/firebase"

const firestoreAxios = axios.create({
  baseURL: `${FIRESTORE_API_ORIGIN}/v1/projects/${PROJECT_ID}/databases/(default)/documents/`,
  headers: {}
})
firestoreAxios.interceptors.request.use(
  async (config) => {
    const token = await AppFirebase.getToken()
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return new Error(error.message)
  }
)

export { firestoreAxios }
