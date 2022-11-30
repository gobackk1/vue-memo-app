import { action } from "@storybook/addon-actions"

export const memoList = [
  {
    id: 1,
    title: "memo1",
    body: "body1"
  },
  {
    id: 2,
    title: "memo2",
    body: "body2"
  },
  {
    id: 3,
    title: "memo3",
    body: "body3"
  },
  {
    id: 4,
    title: "memo4",
    body: "body4"
  }
]

export const memoIconMenu = [
  {
    name: "delete",
    callback: this.onClickDelete
  },
  {
    name: "archive",
    callback: this.onClickArchive
  }
]

export const iconList = [
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
