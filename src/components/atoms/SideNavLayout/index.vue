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
$width_side_nav: 200px;
.side-nav {
  width: $width_side_nav;
  height: 100%;

  &.is-folded {
    width: 50px;
  }
}
</style>
