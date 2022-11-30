<template>
  <div>
    <div :class="$style.root">
      <div @click="onClickMemo" ref="area-memo">
        <Heading level="3" visualLevel="5" :class="$style.heading">{{ memo.title }}</Heading>
        <Txt :class="$style.body">{{ memo.body }}</Txt>
      </div>

      <div :class="$style['hover-icon-menu']">
        <IconsMenu :list="overrideMenuIcons" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/atoms/Heading"
import Txt from "@/components/atoms/Txt"
import IconsMenu from "@/components/molecules/IconsMenu"

export default {
  name: "AppMemo",
  components: { Heading, Txt, IconsMenu },
  props: {
    memo: Object,
    onClickMemo: Function,
    menuIcons: Array
  },
  data() {
    return {
      overrideMenuIcons: []
    }
  },
  created() {
    const { memo, menuIcons } = this
    menuIcons.forEach((menu) => {
      this.overrideMenuIcons.push({ ...menu })
    })
    this.overrideMenuIcons.forEach((menu, index) => {
      menu.callback = function () {
        menuIcons[index].callback(memo)
      }
    })
  }
}
</script>

<style lang="scss" module>
@import "@/styles/property";

.root {
  border-radius: $radius;
  border: 1px solid $color-gray;
  padding: $space $space $space * 4;
  position: relative;

  &:hover .hover-icon-menu {
    display: flex;
  }
}

.root,
.body,
.heading {
  cursor: default;
}

.hover-icon-menu {
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;
  background: $color-gray;
  border-radius: 0 0 $radius $radius;
  width: 100%;
  justify-content: flex-end;
  padding: $space / 2;
}
</style>
