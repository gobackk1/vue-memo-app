<template>
  <div class="card"><slot /></div>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/property";

.card {
  background-color: $color-black;
  border-radius: $radius;
  padding: $space * 2;
  color: $color-text;
  font-size: $font-size-s;
  word-break: break-all;
}
</style>
