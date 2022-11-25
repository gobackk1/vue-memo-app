<template>
  <div>
    <Card>
      <ul>
        <!--
          NOTE:
          反復的にnameを描画して、link を持つ場合は router-link、callback を持つ場合は button を描画する
          TODO:
          MDXを用いてStorybookのDocsにまとめる
        -->
        <li class="list-item" v-for="menu in menuList" :key="menu.name">
          <router-link v-if="menu.link !== undefined" :to="menu.link">{{ menu.name }}</router-link>
          <button v-if="menu.callback !== undefined" type="button" @click="menu.callback">{{ menu.name }}</button>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/atoms/Card"

export default {
  name: "ContextMenu",
  components: { Card },
  props: {
    menuList: Array
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/property";

.list-item {
  padding: $space / 2 0 $space / 2 $space / 2;

  &:hover {
    background-color: $color-gray;
  }

  a,
  button {
    display: block;
    text-align: left;
    width: 100%;
    color: $color-text;
    padding: 0;
    cursor: pointer;
  }
}

.card {
  padding: $space;
}
</style>
