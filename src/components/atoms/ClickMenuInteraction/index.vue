<template>
  <div class="root" ref="root">
    <span :class="clickable" @click="onClick">
      <slot name="icon"></slot>
    </span>
    <div v-show="isOpen" class="menu" :style="menuStyles">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script>
import { APP_PREFIX } from "@/constant"
export default {
  name: "ClickMenuInteraction",
  data() {
    return {
      iconPosX: 0,
      isOpen: false
    }
  },
  mounted() {
    this.iconPosX = this.$refs.root.firstElementChild.getBoundingClientRect().x
  },
  computed: {
    menuStyles() {
      const center = window.innerWidth / 2
      const styles = center >= this.iconPosX ? { left: 0 } : { right: 0 }
      return styles
    },
    clickable() {
      return `${APP_PREFIX}clickable`
    }
  },
  methods: {
    onClick() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  position: relative;
}
.menu {
  position: absolute;
  top: 100%;
}
</style>
