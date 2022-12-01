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
import MemoEditor from "@/components/molecules/MemoEditor"
import MemoList from "@/components/organisms/MemoList"
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
    }
  },
  created() {
    // TODO: アーカイブメモのみ取得する getter を実装する
    this.memoList = this.$store.state.memoList
  }
}
</script>
