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

export const navList = [
  {
    id: 1,
    name: "メモ",
    icon: "sticky_note_2",
    to: "/memos"
  },
  {
    id: 2,
    name: "ラベル1",
    icon: "label",
    to: "/memos/labelId"
  },
  {
    id: 3,
    name: "ラベルの編集",
    icon: "edit",
    to() {
      action("clickしました")()
    }
  },
  {
    id: 4,
    name: "アーカイブ",
    icon: "archive",
    to: "/archive"
  },
  {
    id: 5,
    name: "ゴミ箱",
    icon: "delete",
    to: "/trash"
  }
]
