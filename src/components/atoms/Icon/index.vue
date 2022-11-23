<script>
export default {
  name: "AppIcon",
  data() {
    return {
      iconSizeMap: {
        s: "md-18",
        m: "md-24",
        l: "md-36",
        xl: "md-48"
      }
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "m"
    },
    handleClick: {
      type: Function
    }
  },
  computed: {
    iconClass() {
      const size = Object.keys(this.iconSizeMap).includes(this.size) ? this.size : "m"
      return `material-icons ${this.iconSizeMap[size]}`
    }
  },
  render() {
    const { handleClick, name, iconClass } = this
    return handleClick ? (
      <span onClick={handleClick} class={[iconClass, "clickable"]}>
        {name}
      </span>
    ) : (
      <span class={iconClass}>{name}</span>
    )
  }
}
</script>

<style scoped lang="scss">
.clickable {
  cursor: pointer;
}
</style>
