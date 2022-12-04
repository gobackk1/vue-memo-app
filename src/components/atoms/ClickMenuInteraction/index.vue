<template>
  <div :class="$style.root" ref="root">
    <div :class="[$style.icon, clickable]" @click="onClick">
      <slot name="icon"></slot>
    </div>
    <div v-show="isOpen" :class="$style.menu" :style="menuStyles">
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

<style lang="scss" module>
.root {
  position: relative;
  display: flex;
}
.icon {
  display: flex;
}
.menu {
  position: absolute;
  top: 100%;
}
</style>
