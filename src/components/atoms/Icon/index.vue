<template>
  <span :class="iconClass" v-on="$listeners" v-bind="$attrs">{{ name }}</span>
</template>

<script>
export default {
  name: "AppIcon",
  data() {
    return {
      iconSizeMap: {
        s: "md-18",
        m: "md-24",
        l: "md-36",
        xl: "md-48"
      }
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "m"
    }
  },
  computed: {
    iconClass() {
      const clickableClass = this.$listeners.click ? "clickable" : ""
      const size = Object.keys(this.iconSizeMap).includes(this.size) ? this.size : "m"
      return `material-icons ${this.iconSizeMap[size]} ${clickableClass}`
    }
  },
  methods: {
    onClickIcon(ev) {
      ev.stopPropagation()
      this.handleClick()
    }
  }
}
</script>

<style module lang="scss"></style>
