<template>
  <div>
    <div :class="classes">
      <Input
        type="text"
        placeholder="メモのタイトルを入力..."
        @focus="onFocusInput"
        @input="title = $event.target.value"
        :value="title"
        class="input-title"
        ref="title"
      />
      <div v-show="isEditing" class="body">
        <Textarea
          @input="body = $event.target.value"
          :value="body"
          rows="3"
          ref="body"
          placeholder="メモ本文を入力..."
          class="input-body"
        ></Textarea>
        <Button @click="onClickCreate" :disabled="disabled" ref="create-button">作成</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import Textarea from "@/components/atoms/Textarea"
export default {
  name: "CreateMemoInput",
  components: { Button, Input, Textarea },
  props: {
    createMemo: Function
  },
  data() {
    return {
      isEditing: false,
      title: "",
      body: ""
    }
  },
  methods: {
    onFocusInput() {
      if (!this.isEditing) {
        this.isEditing = true
        this.$nextTick(() => {
          this.$refs.body.$el.focus()
        })
      }
    },
    onClickCreate() {
      this.createMemo({
        title: this.title,
        body: this.body
      })
      this.title = ""
      this.body = ""
      this.$refs.title.$el.value = ""
      this.$refs.body.$el.value = ""
      this.isEditing = false
    },
    closeTextarea(ev) {
      if (!this.$el.contains(ev.target)) {
        this.isEditing = false
      }
    }
  },
  computed: {
    disabled() {
      return this.title === "" && this.body === ""
    },
    classes() {
      return this.isEditing ? ["root", "is-editing"] : ["root"]
    }
  },
  mounted() {
    window.addEventListener("click", this.closeTextarea)
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeTextarea)
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/property";

.root {
  border: $border;
  padding: $space;
  border-radius: $radius;
}

.input-title {
  .is-editing & {
    margin-bottom: $space;
  }
}

.input-body {
  margin-bottom: $space;
}

.body {
  text-align: right;
}
</style>
