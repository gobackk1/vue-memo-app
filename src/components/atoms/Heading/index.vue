<template>
  <component :is="headingTag" :class="headingVisual">
    <slot />
  </component>
</template>

<script>
export default {
  name: "AppHeading",
  props: {
    level: {
      type: String,
      default: "2"
    },
    visualLevel: {
      type: String,
      default: "2"
    }
  },
  computed: {
    headingTag() {
      const level = Math.min(6, Math.max(1, this.level))
      return `h${level}`
    },
    headingVisual() {
      const visualLevel = Math.min(6, Math.max(1, this.visualLevel))
      return `h${visualLevel}`
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/property";

/* prettier-ignore */
.h1,.h2,.h3,.h4,.h5,.h6 {
  color: $color-text;
  font-weight: bold;
}

.h1 {
  font-size: $font-size-xxl;
}
.h2 {
  font-size: $font-size-xl;
}
.h3 {
  font-size: $font-size-l;
}
.h4 {
  font-size: $font-size-m;
}
.h5 {
  font-size: $font-size-s;
}
.h6 {
  font-size: $font-size-xs;
}

@include rwd("pc") {
  .h1 {
    font-size: $font-size-xxxl;
  }
  .h2 {
    font-size: $font-size-xxl;
  }
  .h3 {
    font-size: $font-size-xl;
  }
  .h4 {
    font-size: $font-size-l;
  }
  .h5 {
    font-size: $font-size-m;
  }
  .h6 {
    font-size: $font-size-s;
  }
}
</style>
