<template>
  <button :class="buttonClasses" v-on="$listeners" v-bind="$attrs"><slot /></button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    color: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    buttonClasses() {
      return `root root-${this.color}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/property";

.root {
  border-radius: $radius;
  font-size: $font-size-m;
  color: $color-text;
  cursor: pointer;
  padding: $space;
  &-primary {
    background-color: $color-primary;
  }
  &-warning {
    background-color: $color-warning;
  }
  &-danger {
    background-color: $color-danger;
  }

  &[disabled] {
    background-color: $color-gray-dark;
    cursor: default;
  }
}
</style>
