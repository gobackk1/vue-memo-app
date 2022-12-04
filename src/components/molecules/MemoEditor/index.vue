<template>
  <div>
    <div :class="$style.root">
      <Input :class="$style.input" type="text" :value="memo.title" ref="input" @input="onInputTitle" />
      <div>
        <Textarea :value="memo.body" ref="textarea" @input="onInputBody"></Textarea>
      </div>

      <div :class="$style.menu">
        <IconsMenu :list="overrideMenuIcons" />
        <Button type="button" @click="onClickUpdate" ref="button-update">更新</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/atoms/Input"
import Textarea from "@/components/atoms/Textarea"
import Button from "@/components/atoms/Button"
import IconsMenu from "@/components/molecules/IconsMenu"

export default {
  name: "MemoEditor",
  components: { Input, Textarea, Button, IconsMenu },
  props: {
    memo: Object,
    menuIcons: Array
  },
  data() {
    return {
      edited: {
        title: "",
        body: ""
      },
      overrideMenuIcons: []
    }
  },

  methods: {
    onInputTitle(ev) {
      this.edited.title = ev.target.value
    },
    onInputBody(ev) {
      this.edited.body = ev.target.value
    },
    onClickUpdate() {
      this.$listeners.clickUpdate({ ...this.memo, ...this.edited })
    }
  },
  mounted() {
    this.edited.title = this.$refs.input.value
    this.edited.body = this.$refs.textarea.value
  },
  created() {
    const { memo, menuIcons } = this
    const that = this
    menuIcons.forEach((menu) => {
      this.overrideMenuIcons.push({ ...menu })
    })
    this.overrideMenuIcons.forEach((menu, index) => {
      menu.callback = function () {
        menuIcons[index].callback(memo)

        if (menu.name.match(/(delete|archive)/)) {
          that.$modal.hide("ModalMemoEditor")
        }
      }
    })
  }
}
</script>

<style lang="scss" module>
@import "@/styles/property";

.root {
  border: $border;
  padding: $space;
  border-radius: $radius;
}

.input {
  margin-bottom: $space;
}

.menu {
  display: flex;
}
</style>
