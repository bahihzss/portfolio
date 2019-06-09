<template>
  <section class="first-view" :class="[{ reverse }]">
    <div>
      <logo ref="logo" />
      <div class="command">
        <type-effect ref="reverseCommandEffect" :text="reverseCommand" />
      </div>
      <h1 class="title">
        <type-effect ref="titleEffect" :text="title" />
      </h1>
      <h2 class="subtitle">
        <type-effect ref="subTitleEffect" :text="subTitle" />
      </h2>
      <div class="links">
        <a
          href="https://www.wantedly.com/users/90652610"
          target="_blank"
          class="button primary"
        >
          Wantedly
        </a>
        <a
          href="https://github.com/bahihzss"
          target="_blank"
          class="button secondary"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import TypeEffect from '~/components/TypeEffect.vue'

import sleep from '~/helpers/sleep'

export default {
  components: {
    Logo,
    TypeEffect
  },

  props: {
    title: {
      type: String,
      default: ''
    },

    subTitle: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      reverse: true,
      reverseCommand: ''
    }
  },

  async mounted() {
    await this.command('wake up')
    await this.$refs.logo.start()

    await this.command('rotate')
    await this.$refs.logo.rotate()

    await this.command('reverse background')

    this.reverse = false
    await this.$nextTick()

    await sleep(1000)

    await this.$refs.titleEffect.start(0, 200)
    await this.$refs.subTitleEffect.start()
  },

  methods: {
    async command(command = '') {
      this.reverseCommand = command
      await this.$refs.reverseCommandEffect.start(500, 500)
      this.$refs.reverseCommandEffect.clear()
    }
  }
}
</script>

<style lang="scss" scoped>
.first-view {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  transition: background-color 0.8s ease-out;

  &.reverse,
  &:nth-child(2n) {
    background-color: var(--color-dark);
    color: white;
  }
}

.command {
  font-size: 23px;
  margin: 1em;
}

.title {
  font-family: 'Nunito', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  padding: 20px 0;
  color: var(--color-title);
  text-transform: uppercase;
  margin-bottom: initial;
}

.subtitle {
  font-family: 'Nunito', sans-serif;
  font-weight: 300;
  font-size: 32px;
  color: var(--color-subtitle);
  word-spacing: 5px;
  padding-bottom: 20px;
}

.links {
  padding-top: 15px;
  display: flex;
  justify-content: center;

  > *:not(:last-child) {
    margin-right: 1em;
  }
}
</style>
