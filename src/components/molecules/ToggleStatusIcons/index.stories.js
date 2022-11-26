import ToggleStatusIcons from "./index.vue"
import store from "@/store"

export default {
  name: "ToggleStatusIcons"
}

const statusIconMapping = {
  grid: "grid_view",
  column: "view_agenda",
  settings: "settings"
}

export const Default = () => ({
  render() {
    return (
      <ToggleStatusIcons
        status={store.state.currentListView}
        statusIconMapping={statusIconMapping}
        toggleStatus={() => {
          store.commit("toggleListView", statusIconMapping)
        }}
      />
    )
  }
})
