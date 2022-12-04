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
import { mapActions } from "vuex"

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
    onClickArchive(memo) {
      this.moveTo({ status: "live", memo })
    },
    onClickDelete(memo) {
      this.moveTo({ status: "trashed", memo })
    },
    ...mapActions(["moveTo"])
  },
  created() {
    this.$store.watch(() => {
      this.memoList = this.$store.getters.getMemosByStatus("archived")
    })
  },
  mixins: [showMemoModal]
}
</script>
