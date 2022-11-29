import { action } from "@storybook/addon-actions"

export const list = [
  {
    name: "delete",
    callback() {
      action("click delete icon")()
    }
  },
  {
    name: "archive",
    callback() {
      action("click archive icon")()
    }
  },
  {
    name: "settings",
    callback() {
      action("click settings icon")()
    }
  }
]
