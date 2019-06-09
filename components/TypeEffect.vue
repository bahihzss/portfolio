<template>
  <span class="display">
    {{ display }}<blink-cursor v-if="cursor" :color="cursorColor" />
  </span>
</template>

<script>
import BlinkCursor from '~/components/BlinkCursor.vue'
import sleep from '~/helpers/sleep'

export default {
  name: 'TypeEffect',

  components: {
    BlinkCursor
  },

  props: {
    text: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      cursor: false,
      display: ' '
    }
  },

  computed: {
    cursorColor() {
      return window.getComputedStyle(this.$el).color
    }
  },

  methods: {
    async start(intervalBefore = 0, intervalAfter = 0) {
      this.cursor = true
      await sleep(intervalBefore)

      await this.loopInterval(this.text.length + 1, 100, i => {
        this.display = this.text.slice(0, i)
      })

      await sleep(intervalAfter)
      this.cursor = false
    },

    clear() {
      this.display = ''
    },

    loopInterval(limit, interval, callback) {
      let resolver
      const promise = new Promise(resolve => {
        resolver = resolve
      })

      let i = 0

      const loop = () => {
        const result = callback(i)
        if (result === false) return
        i++

        if (i < limit) setTimeout(loop, interval)
        else resolver(result)
      }

      loop()

      return promise
    }
  }
}
</script>
