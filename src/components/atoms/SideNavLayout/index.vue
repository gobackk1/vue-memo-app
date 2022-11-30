<template>
  <div :class="classes">
    <div>
      <NavList :list="list" :isFolded="isFolded" />
    </div>
  </div>
</template>

<script>
import NavList from "@/components/organisms/NavList"
export default {
  name: "SideNavLayout",
  components: { NavList },
  props: {
    list: Array,
    isFolded: Boolean
  },
  computed: {
    classes() {
      return this.isFolded ? ["side-nav", "is-folded"] : ["side-nav"]
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/property";

.side-nav {
  width: 50;
  height: 100%;
}

@include rwd("pc") {
  .side-nav {
    width: 200px;
    &.is-folded {
      width: 50px;
    }
  }
}
</style>
