import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import firebase from "firebase"
// import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyCUZVux1YiBBsej6muTDrrQFclXeSjNKqE",
  authDomain: "vue-memo-app-bd2b4.firebaseapp.com",
  projectId: "vue-memo-app-bd2b4",
  storageBucket: "vue-memo-app-bd2b4.appspot.com",
  messagingSenderId: "692445313126",
  appId: "1:692445313126:web:6ce12cd2ab2f7cd4ac15a7",
  measurementId: "G-KGRB0MTZ7T"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// localではエミュレータを立てる
if (window.location.hostname === "localhost") {
  const auth = firebase.auth()
  const db = firebase.firestore()
  auth.useEmulator("http://localhost:9099")
  db.useEmulator("localhost", 8888)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
