<template>
  <div :class="[$style.root, foldedClass]">
    <div :class="$style.side">
      <slot name="side" />
    </div>
    <div :class="$style.contents">
      <slot name="contents" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNavLayout",
  props: {
    isFolded: Boolean
  },
  computed: {
    foldedClass() {
      return this.isFolded ? this.$style.isFolded : null
    }
  }
}
</script>

<style module lang="scss">
@import "@/styles/property";
.root {
  display: flex;
}
.contents {
  flex: 1;
  padding: $space * 2;
}
.side {
  width: 50px;
  height: 100%;
}
@include rwd("pc") {
  .side {
    width: 200px;
    .isFolded & {
      width: 50px;
    }
  }
}
</style>
