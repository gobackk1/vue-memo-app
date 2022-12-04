import MemoEditor from "@/components/molecules/MemoEditor"

export const showMemoModal = {
  methods: {
    showModal(memo) {
      this.$modal.show(
        {
          components: { MemoEditor },
          template: `<MemoEditor :menuIcons="menuIcons" :memo="memo" @clickUpdate="clickUpdate" />`,
          props: ["menuIcons", "memo"],
          methods: {
            clickUpdate(memo) {
              this.$store.dispatch("updateMemo", memo)
              this.$modal.hide("ModalMemoEditor")
            }
          }
        },
        { memo, menuIcons: this.iconMenu },
        { height: "auto", name: "ModalMemoEditor" }
      )
    }
  }
}
