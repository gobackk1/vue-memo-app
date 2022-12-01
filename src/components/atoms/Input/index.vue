<template>
  <input :class="$style.root" v-on="$listeners" v-bind="$attrs" />
</template>

<script>
export default {
  name: "AppInput",
  props: ["value"]
}
</script>

<style lang="scss" module>
.root {
  width: 100%;
}
</style>
