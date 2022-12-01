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
import CreateMemoInput from "@/components/molecules/CreateMemoInput"
import { showMemoModal } from "@/mixins/memoModal"

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
    createMemo() {
      // TODO: dispatch('action', id) の実装
      console.log("createMemo")
    }
  },
  created() {
    this.memoList = this.$store.state.memoList
  },
  mixins: [showMemoModal]
}
</script>
