<template>
  <header class="header">
    <div v-if="loginUser" class="menu">
      <Icon name="menu" size="l" :handleClick="onClickMenu" />
    </div>
    <Heading class="title" level="1" visualLevel="1">MemoApp</Heading>
    <div v-if="loginUser" class="toolbar">
      <ToggleIconInteraction
        class="toolbar-toggle"
        :status="listViewStatus"
        :statusIconMapping="statusIconMapping"
        :toggleStatus="toggleStatus"
      />
      <ClickMenuInteraction>
        <Icon slot="icon" size="l" name="settings" />
        <ContextMenu slot="menu" :menuList="menuList" :style="{ width: '200px' }" />
      </ClickMenuInteraction>
      <div class="toolbar-avator">
        <Avator :avatorSrc="loginUser.photoURL" />
      </div>
    </div>
  </header>
</template>

<script>
import Heading from "@/components/atoms/Heading"
import Icon from "@/components/atoms/Icon"
import Avator from "@/components/atoms/Avator"
import ToggleIconInteraction from "@/components/atoms/ToggleIconInteraction"
import ContextMenu from "@/components/molecules/ContextMenu"
import ClickMenuInteraction from "@/components/atoms/ClickMenuInteraction"

export default {
  name: "AppHeader",
  components: { Heading, Icon, Avator, ToggleIconInteraction, ClickMenuInteraction, ContextMenu },
  props: {
    loginUser: Object,
    onClickMenu: Function,
    menuList: Array,
    toggleStatus: Function,
    listViewStatus: String,
    statusIconMapping: Object
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/property";

.header {
  background-color: $color-header-bg;
  color: $color-header-text;
  height: 50px;
  display: flex;
  align-items: center;
}

.menu {
  margin: 0 $space;
  display: flex;
  align-items: center;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  &-avator {
    margin: 0 $space;
    display: flex;
  }

  &-settings {
    margin-left: $space;
  }

  &-toggle {
    margin-left: $space;
  }

  &-search {
    margin-left: $space;
  }
}
</style>
