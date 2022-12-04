<template>
  <MemosTemplate :isFolded="isFolded">
    <CreateMemoInput slot="create-memo-input" :createMemo="createMemo" />
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
import { mapActions } from "vuex"

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
    onClickArchive(memo) {
      this.moveTo({ status: "archived", memo })
    },
    onClickDelete(memo) {
      this.moveTo({ status: "trashed", memo })
    },
    ...mapActions(["createMemo", "moveTo"])
  },
  created() {
    this.$store.watch(() => {
      this.memoList = this.$store.getters.getMemosByStatus("live")
    })
  },
  mixins: [showMemoModal]
}
</script>
