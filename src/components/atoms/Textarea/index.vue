<template>
  <textarea
    :class="$style.root"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus')"
    v-bind="$attrs"
  ></textarea>
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
