<template>
  <div :class="[classes, $style.root]">
    <SideNavLayout :list="list" :isFolded="isFolded" />
    <main :class="$style.main">
      <div :class="$style['create-memo']">
        <slot name="create-memo-input" />
      </div>
      <div :class="$style.contents">
        <slot class="contents" name="contents" />
      </div>
    </main>
  </div>
</template>

<script>
import SideNavLayout from "@/components/atoms/SideNavLayout"
import { navList } from "@/devVariables"
export default {
  name: "MemosTemplate",
  components: { SideNavLayout },
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
.root {
  display: flex;
}
.main {
  flex: 1;
  padding: $space * 2;
}
.create-memo {
  margin-bottom: $space * 2;
}
.isFolded {
  font-size: 10px;
}
</style>
