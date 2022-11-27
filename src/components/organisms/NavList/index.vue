<template>
  <div :class="navListClasses">
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <router-link v-if="typeof item.to === 'string'" :to="item.to" class="link">
          <Icon :name="item.icon" size="l" />
          <span class="label-text">{{ item.name }}</span>
        </router-link>
        <button v-else-if="typeof item.to === 'function'" @click="item.to" type="button" class="button">
          <Icon :name="item.icon" size="l" />
          <span class="label-text">{{ item.name }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/atoms/Icon"

export default {
  name: "NavList",
  components: { Icon },
  props: {
    list: Array,
    isFolded: Boolean
  },
  computed: {
    navListClasses() {
      return this.isFolded ? ["root", "is-folded"] : ["root"]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/property";

.root,
.list {
  width: 100%;
}
.link,
.button {
  display: flex;
  align-items: center;
  width: 100%;
  color: $color-text;
  padding: $space 0;
  font-size: $font-size-s;
  cursor: pointer;

  .material-icons {
    margin: 0 $space;
  }

  &:hover {
    background-color: $color-gray;
  }
}
.is-folded {
  .label-text {
    display: none;
  }
}
</style>
