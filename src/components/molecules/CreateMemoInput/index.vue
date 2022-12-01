<template>
  <div>
    <div :class="classes">
      <Input
        type="text"
        v-model="title"
        placeholder="メモのタイトルを入力..."
        @focus="onFocusInput"
        class="input-title"
        ref="title"
      />
      <div v-show="isEditing" class="body">
        <textarea v-model="body" rows="3" ref="body" placeholder="メモ本文を入力..." class="input-body"></textarea>
        <Button @click="onClickCreate" :disabled="disabled" ref="create-button">作成</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
export default {
  name: "CreateMemoInput",
  components: { Button, Input },
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
          this.$refs.body.focus()
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
  width: 100%;
  margin-bottom: $space;
}

.body {
  text-align: right;
}
</style>
