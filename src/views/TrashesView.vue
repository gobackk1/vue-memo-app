<template>
  <TrashesTemplate>
    <div slot="contents">
      <MemoList
        :memoList="memoList"
        :mode="currentListView"
        :menuIcons="iconMenu"
        :onClickMemo="showModal"
        slot="contents"
      />
    </div>
  </TrashesTemplate>
</template>

<script>
import TrashesTemplate from "@/components/templates/TrashesTemplate"
import MemoList from "@/components/organisms/MemoList"
import { showMemoModal } from "@/mixins/memoModal"
import { mapActions } from "vuex"

export default {
  name: "TrashesView",
  components: { TrashesTemplate, MemoList },
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
      this.deleteMemo(memo)
    },
    ...mapActions(["moveTo", "deleteMemo"])
  },
  created() {
    this.$store.watch(() => {
      this.memoList = this.$store.getters.getMemosByStatus("trashed")
    })
  },
  mixins: [showMemoModal]
}
</script>
