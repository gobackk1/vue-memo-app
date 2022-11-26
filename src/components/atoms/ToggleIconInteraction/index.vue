<template>
  <div class="root">
    <Icon :name="iconName" size="l" :handleClick="toggleStatus" />
  </div>
</template>

<script>
/**
 * NOTE:
 * 以下のpropsを受け取り、ユーザークリック時に外部の状態を変更し、変更後の状態に応じたアイコンを表示する
 * ハンバーガーメニューとばつ印、リスト表示とグリッド表示の切り替えなどを想定
 * - 外部の状態
 * - 外部の状態を変更するイベントハンドラ
 * - 外部の状態とアイコンをマッピングするオブジェクト
 */
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
