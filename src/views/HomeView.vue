<template>
  <HomeTemplate>
    <Button slot="googleAuthButton" @click="login">Googleアカウントでログインする</Button>
    <Button slot="trialAuthButton" @click="() => {}">試用アカウントでログインする</Button>
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
