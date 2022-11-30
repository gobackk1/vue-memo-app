<template>
  <div>
    <div :class="$style.root">
      <Input :class="$style.input" type="text" :value="memo.title" ref="input" @input="onInputTitle" />
      <div>
        <Textarea :value="memo.body" ref="textarea" @input="onInputBody"></Textarea>
      </div>

      <div :class="$style.menu">
        <IconsMenu :list="list" />
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
    list: Array
  },
  data() {
    return {
      edited: {
        title: "",
        body: ""
      }
    }
  },

  methods: {
    onInputTitle(value) {
      this.edited.title = value
    },
    onInputBody(value) {
      this.edited.body = value
    },
    onClickUpdate() {
      this.$listeners.clickUpdate(this.edited)
    }
  },
  mounted() {
    this.edited.title = this.$refs.input.value
    this.edited.body = this.$refs.textarea.value
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
