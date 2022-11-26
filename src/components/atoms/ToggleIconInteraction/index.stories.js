import ToggleIconInteraction from "./index.vue"
import store from "@/store"

export default {
  name: "ToggleIconInteraction"
}

const statusIconMapping = {
  grid: "grid_view",
  column: "view_agenda",
  settings: "settings"
}

export const Default = () => ({
  render() {
    return (
      <ToggleIconInteraction
        status={store.state.currentListView}
        statusIconMapping={statusIconMapping}
        toggleStatus={() => {
          store.commit("toggleListView", statusIconMapping)
        }}
      />
    )
  }
})
