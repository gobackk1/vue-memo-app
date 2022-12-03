<template>
  <ArchiveTemplate>
    <div slot="contents">
      <MemoList
        :memoList="memoList"
        :mode="currentListView"
        :menuIcons="iconMenu"
        :onClickMemo="showModal"
        slot="contents"
      />
    </div>
  </ArchiveTemplate>
</template>

<script>
import ArchiveTemplate from "@/components/templates/ArchiveTemplate"
import MemoList from "@/components/organisms/MemoList"
import { showMemoModal } from "@/mixins/memoModal"

export default {
  name: "ArchiveView",
  components: { ArchiveTemplate, MemoList },
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
      // TODO: アーカイブを戻すアクションを実装
      console.log(id, "onClickArchive")
    },
    onClickDelete({ id }) {
      // TODO: dispatch('action', id) の実装
      console.log(id, "onClickDelete")
    }
  },
  created() {
    this.$store.watch(() => {
      this.memoList = this.$store.getters.getMemosByStatus("archived")
    })
  },
  mixins: [showMemoModal]
}
</script>
