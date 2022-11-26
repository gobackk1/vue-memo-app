<template>
  <div class="root">
    <Icon :name="iconName" size="l" :handleClick="toggleStatus" />
  </div>
</template>

<script>
import Icon from "@/components/atoms/Icon"

export default {
  name: "ToggleListView",
  components: { Icon },
  props: {
    status: String,
    toggleStatus: Function,
    statusIconMapping: Object
  },
  computed: {
    iconName() {
      return this.statusIconMapping[this.status]
    }
  }
}
</script>

<style>
.root {
  display: flex;
  align-items: center;
}
</style>
