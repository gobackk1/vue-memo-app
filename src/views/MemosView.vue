<template>
  <MemosTemplate :isFolded="isFolded">
    <CreateMemoInput slot="create-memo-input" />
    <MemoList
      :memoList="memoList"
      :mode="currentListView"
      :menuIcons="iconMenu"
      :onClickMemo="showModal"
      slot="contents"
    />
  </MemosTemplate>
</template>

<script>
import MemosTemplate from "@/components/templates/MemosTemplate"
import MemoList from "@/components/organisms/MemoList"
import MemoEditor from "@/components/molecules/MemoEditor"
import CreateMemoInput from "@/components/molecules/CreateMemoInput"

export default {
  name: "MemosView",
  components: { MemosTemplate, MemoList, CreateMemoInput },
  data() {
    return {
      memoList: [],
      iconMenu: [
        {
          name: "delete",
          callback: this.onClickDelete
        },
        {
          name: "archive",
          callback: this.onClickArchive
        }
      ]
    }
  },
  computed: {
    isFolded() {
      return this.$store.state.isFoldedSideNav
    },
    currentListView() {
      return this.$store.state.currentListView
    }
  },
  methods: {
    onClickArchive({ id }) {
      // TODO: dispatch('action', id) の実装
      console.log(id, "onClickArchive")
    },
    onClickDelete({ id }) {
      // TODO: dispatch('action', id) の実装
      console.log(id, "onClickDelete")
    },
    showModal(memo) {
      this.$modal.show(
        {
          components: { MemoEditor },
          template: `<MemoEditor :list="list" :memo="memo" @clickUpdate="clickUpdate" />`,
          props: ["list", "memo"],
          methods: {
            clickUpdate(memo) {
              //TODO: dispatch update
              console.log(memo, "clickUpdate")
            }
          }
        },
        { memo, list: this.iconMenu },
        { height: "auto" }
      )
    },
    createMemo() {
      // TODO: dispatch('action', id) の実装
      console.log("createMemo")
    }
  },
  created() {
    this.memoList = this.$store.state.memoList
  }
}
</script>
