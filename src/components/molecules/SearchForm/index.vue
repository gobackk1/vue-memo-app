<template>
  <div class="search-form">
    <Icon name="search" class="icon-search" />
    <input type="text" placeholder="検索" class="input" />
  </div>
</template>

<script>
import Icon from "@/components/atoms/Icon"
export default {
  name: "SearchForm",
  components: { Icon }
}
</script>

<style lang="scss" scoped>
@import "@/styles/property";

.search-form {
  background-color: $color-gray-dark;
  border-radius: $radius;
  display: flex;
  align-items: center;
  padding: 4px;
}

.input {
  background-color: $color-gray-dark;
  border: none;
  font-size: $font-size-m;
  outline: none;
  caret-color: $color-white;
}

.icon-search {
  margin-right: 4px;
}
</style>
