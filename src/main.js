import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// import { getAnalytics } from "firebase/analytics"
import VModal from "vue-js-modal"
import { FIREBASE_CONFIG } from "@/constant"
import AppFirebase from "@/firebase"
import vuetify from "./plugins/vuetify"

Vue.use(VModal)
Vue.config.productionTip = false

AppFirebase.initialize(FIREBASE_CONFIG)
AppFirebase.initializeVueApp(
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App)
  })
)
