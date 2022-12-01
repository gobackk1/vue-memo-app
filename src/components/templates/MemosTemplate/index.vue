<template>
  <div :class="[classes, $style.root]">
    <SideNavLayout :isFolded="isFolded">
      <NavList slot="side" :list="list" />
      <main :class="$style.main" slot="contents">
        <div :class="$style['create-memo']">
          <slot name="create-memo-input" />
        </div>
        <div :class="$style.contents">
          <slot class="contents" name="contents" />
        </div>
      </main>
    </SideNavLayout>
  </div>
</template>

<script>
import SideNavLayout from "@/components/atoms/SideNavLayout"
import NavList from "@/components/organisms/NavList"
import { navList } from "@/devVariables"
export default {
  name: "MemosTemplate",
  components: { SideNavLayout, NavList },
  data() {
    return {
      list: navList
    }
  },
  props: {
    isFolded: Boolean
  },
  computed: {
    classes() {
      return this.isFolded ? this.$style.isFolded : null
    }
  }
}
</script>

<style module lang="scss">
@import "@/styles/property";

.create-memo {
  margin-bottom: $space * 2;
}
</style>
