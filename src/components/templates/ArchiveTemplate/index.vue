<template>
  <div :class="[$style.root]">
    <SideNavLayout :isFolded="isFolded">
      <NavList slot="side" :list="list" :isFolded="isFolded" />
      <main :class="$style.main" slot="contents">
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
  name: "ArchiveTemplate",
  components: { SideNavLayout, NavList },
  data() {
    return {
      list: navList
    }
  },
  props: {
    isFolded: Boolean
  }
}
</script>

<style module lang="scss">
.root {
}
</style>
