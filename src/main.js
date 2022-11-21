import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { initializeApp } from "firebase/app"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { getAuth, connectAuthEmulator } from "firebase/auth"
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
initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

if (window.location.hostname === "localhost") {
  connectAuthEmulator(getAuth(), "http://localhost:9099")
  connectFirestoreEmulator(getFirestore(), "localhost", 8888)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
