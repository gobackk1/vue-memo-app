<template>
  <div :class="$style.root">
    <Icon v-for="item in list" :key="item.name" @click="item.callback" :name="item.name" />
  </div>
</template>

<script>
import Icon from "@/components/atoms/Icon"
export default {
  name: "IconsMenu",
  components: { Icon },
  props: {
    list: Array
  }
}
</script>

<style module lang="scss">
.root {
  display: flex;
}
</style>
