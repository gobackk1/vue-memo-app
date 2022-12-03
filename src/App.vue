<template>
  <div id="app">
    <Header
      :loginUser="loginUser"
      :menuList="menuList"
      :toggleStatus="toggleStatus"
      :listViewStatus="listViewStatus"
      :statusIconMapping="statusIconMapping"
      :onClickMenu="onClickMenu"
    />
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
      ],
      statusIconMapping: {
        grid: "grid_view",
        column: "view_agenda"
      }
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setLoginUser(user)

      if (user) {
        this.fetchMemos()
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
    },
    listViewStatus() {
      return this.$store.state.currentListView
    }
  },
  methods: {
    ...mapActions(["setLoginUser", "logout", "fetchMemos"]),
    ...mapMutations(["initializeAuth", "logoutUser"]),
    toggleStatus() {
      this.$store.commit("toggleListView", this.statusIconMapping)
    },
    onClickMenu() {
      this.$store.commit("toggleSideNav")
    }
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
