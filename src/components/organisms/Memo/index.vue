<template>
  <div>
    <div class="root" @click="onClickMemo">
      <Heading level="3" visualLevel="5" class="heading">{{ memoTitle }}</Heading>
      <Txt class="body"><slot /></Txt>

      <div class="hover-icon-menu">
        <Icon name="archive" :handleClick="onClickArchive" />
        <Icon name="delete" :handleClick="onClickDelete" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/atoms/Heading"
import Txt from "@/components/atoms/Txt"
import Icon from "@/components/atoms/Icon"

export default {
  name: "AppMemo",
  components: { Heading, Txt, Icon },
  props: {
    memoTitle: String,
    onClickArchive: Function,
    onClickDelete: Function,
    onClickMemo: Function
  }
}
</script>

<style lang="scss" scoped>
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
