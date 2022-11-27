<template>
  <div id="app">
    <Header :loginUser="loginUser" :menuList="menuList" />
    <router-view class="view" />
  </div>
</template>

<script>
import Header from "@/components/organisms/Header"
import firebase from "firebase"
import { mapActions, mapMutations } from "vuex"

export default {
  components: { Header },
  data() {
    return {
      menuList: [
        {
          name: "ログアウト",
          callback: () => {
            if (!window.confirm("ログアウトしても良いですか？")) return
            this.logout()
          }
        }
      ]
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setLoginUser(user)

      if (user) {
        if (this.$route.name === "home") {
          this.$router.push("memos")
        }
      } else {
        if (this.$route.name !== "home") {
          this.$router.push("home")
        }
      }
    })
  },
  computed: {
    loginUser() {
      return this.$store.state.loginUser
    }
  },
  methods: {
    ...mapActions(["setLoginUser", "logout"]),
    ...mapMutations(["initializeAuth", "logoutUser"])
  }
}
</script>

<style lang="scss">
@import "@/styles/reset.css";
@import "@/styles/common.scss";
@import "@/styles/icons.scss";

#app {
  height: 100vh;
}
.view {
  height: calc(100% - 50px);
}
</style>
