<template>
  <button :class="buttonClasses" @click="onClickButton"><slot /></button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    onClickButton: Function,
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
}
</style>
