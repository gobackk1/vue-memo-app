<template>
  <div class="root">
    <div class="container">
      <div class="google-auth-button">
        <slot name="googleAuthButton"></slot>
      </div>
      <div class="trial-auth-button">
        <slot name="trialAuthButton"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTemplate"
}
</script>

<style lang="scss" scoped>
@import "@/styles/property";
.root {
  display: flex;
  align-items: center;
  justify-content: center;
}

.google-auth-button button {
  margin: 0 auto $space * 3;
}
.trial-auth-button button {
  margin: auto;
}
</style>
