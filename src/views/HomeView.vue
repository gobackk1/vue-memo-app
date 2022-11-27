<template>
  <HomeTemplate>
    <Button slot="googleAuthButton" :onClickButton="login">Googleアカウントでログインする</Button>
    <Button slot="trialAuthButton" :onClickButton="() => {}">試用アカウントでログインする</Button>
  </HomeTemplate>
</template>

<script>
import Button from "@/components/atoms/Button"
import HomeTemplate from "@/components/templates/HomeTemplate"
import { mapActions } from "vuex"

export default {
  name: "HomeView",
  components: { Button, HomeTemplate },
  methods: {
    ...mapActions(["login"])
  }
}
</script>
