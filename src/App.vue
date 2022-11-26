<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/organisms/Header"

export default {
  components: { Header }
}
</script>

<style lang="scss">
@import "@/styles/reset.css";
@import "@/styles/common.scss";
@import "@/styles/icons.scss";
</style>
