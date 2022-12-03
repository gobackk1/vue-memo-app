<template>
  <textarea :class="$style.root" :value="value" v-on="$listeners" v-bind="$attrs"></textarea>
</template>

<script>
export default {
  name: "AppTextarea",
  props: ["value"]
}
</script>

<style lang="scss" module>
.root {
  width: 100%;
}
</style>
