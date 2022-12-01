<template>
  <input
    :class="$style.root"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus')"
    v-bind="$attrs"
  />
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
