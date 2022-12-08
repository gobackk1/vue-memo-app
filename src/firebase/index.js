import firebase from "firebase"
import "firebase/auth"

class AppFirebase {
  constructor() {
    this.firebase = null
    this.auth = firebase.auth
    this.vueApp = null
    this.token = ""
  }

  initialize(firebaseConfig) {
    this.firebase = firebase.initializeApp(firebaseConfig)

    if (window.location.hostname === "localhost") {
      const db = firebase.firestore()
      this.auth().useEmulator("http://localhost:9099")
      db.useEmulator("localhost", 8888)
    }
  }

  initializeVueApp(vueInstance) {
    this.auth().onAuthStateChanged(() => {
      if (!this.app) {
        this.app = vueInstance
        this.app.$mount("#app")
      }
    })
  }

  async getToken() {
    if (this.auth().currentUser && this.token) {
      return this.token
    } else {
      this.token = await this.auth().currentUser.getIdToken(true)
      return this.token
    }
  }
}

export default new AppFirebase()
