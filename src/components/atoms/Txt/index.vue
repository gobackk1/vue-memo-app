<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script>
export default {
  name: "AppTxt",
  props: {
    role: String,
    size: {
      type: String,
      default: "m"
    },
    tag: {
      type: String,
      default: "p"
    }
  },
  computed: {
    classes() {
      let classes = []
      if (this.role) classes.push(`color-${this.role}`)
      if (this.size) classes.push(`size-${this.size}`)
      return classes.join(" ")
    }
  }
}
</script>

<style lang="scss" scoped></style>
