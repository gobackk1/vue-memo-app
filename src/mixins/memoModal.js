import MemoEditor from "@/components/molecules/MemoEditor"

export const showMemoModal = {
  methods: {
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
  }
}
