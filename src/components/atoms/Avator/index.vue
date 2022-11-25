<template>
  <div :style="avatorStyles" class="avator"></div>
</template>

<script>
export default {
  name: 'AppAvator',
  data() {
    return {
      defaultAvatorURL: '/assets/images/icon/default_avator.png'
    }
  },
  props: {
    avatorSrc: String,
  },
  computed: {
    avatorStyles() {
      const value = this.avatorSrc === undefined
        ? `url(${this.defaultAvatorURL})`
        : `url(${this.avatorSrc}), url(${this.defaultAvatorURL})`

      return {
        backgroundImage: value
      }
    }
  },
}
</script>

<style scoped lang="scss">
.avator {
  width: 40px;
  height: 40px;
  background-size: contain;
  border-radius: 50%;
  display: inline-block;
}
</style>