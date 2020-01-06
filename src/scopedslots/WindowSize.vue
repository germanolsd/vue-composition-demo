<template>
  <div>
    <slot :x="x" :y="y"/>
  </div>
</template>

<script>
export default {
  name: 'window-size',

  data () {
    return {
      x: 0,
      y: 0
    }
  },

  mounted() {
    window.addEventListener("resize", this.windowResize)
    this.windowResize()
  },
  unmounted() {
    window.removeEventListener("resize", this.windowResize)
  },

  methods: {
    windowResize () {
      this.x = window.innerWidth
      this.y = window.innerHeight
    }
  }
}
</script>