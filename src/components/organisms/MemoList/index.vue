<template>
  <ul :class="[$style.root, modeStyle]">
    <li v-for="memo in memoList" :key="memo.id" :class="$style['list-item']">
      <Memo
        :memoTitle="memo.title"
        :onClickArchive="archiveMemo(memo)"
        :onClickDelete="deleteMemo(memo)"
        :onClickMemo="showModal(memo)"
        >{{ memo.body }}</Memo
      >
    </li>
  </ul>
</template>

<script>
import Memo from "@/components/organisms/Memo"
export default {
  name: "MemoList",
  components: { Memo },
  props: {
    memoList: Array,
    mode: String,
    onClickArchive: Function,
    onClickDelete: Function,
    onClickMemo: Function
  },
  methods: {
    showModal(memo) {
      const that = this
      return function () {
        that.onClickMemo(memo)
      }
    },
    archiveMemo(memo) {
      const that = this
      return function () {
        that.onClickArchive(memo)
      }
    },
    deleteMemo(memo) {
      const that = this
      return function () {
        that.onClickDelete(memo)
      }
    }
  },
  computed: {
    modeStyle() {
      return this.$style[this.mode]
    }
  }
}
</script>

<style module lang="scss">
@import "@/styles/property";

.root {
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.column {
}
.list-item {
  margin-bottom: $space;
  .grid & {
    width: 49%;
  }
  .column & {
    width: 100%;
  }
}

@include rwd("pc") {
  .grid {
    justify-content: flex-start;
    .list-item {
      width: 200px;
      margin-right: $space;
    }
  }
}
</style>
