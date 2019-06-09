<template>
  <div class="service" @click="open = !open">
    <font-awesome-icon class="picture" :icon="icon" />
    <h1>{{ name }}<font-awesome-icon class="caret" :icon="caretIcon" /></h1>
    <div ref="description" :style="styleOpened" class="description">
      <p v-for="(line, i) in descriptionLines" :key="i">
        {{ line }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service',

  props: {
    icon: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },

    description: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      open: false
    }
  },

  computed: {
    descriptionLines() {
      return this.description.split('\n')
    },

    styleOpened() {
      return this.open
        ? {
            opacity: 1,
            visibility: 'visible',
            maxHeight: this.$refs.description.scrollHeight + 'px',
            transition: 'opacity 0.3s ease-out, max-height 0.5s ease-out'
          }
        : {}
    },

    caretIcon() {
      return this.open ? 'caret-up' : 'caret-down'
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  text-align: center;
  cursor: pointer;
  margin: 1em 0;

  .caret {
    margin-left: 0.6em;
  }

  .picture {
    font-size: 80px;
    margin: 3rem 0;
  }

  h1 {
    font-size: 1rem;
    margin-bottom: 1em;
  }

  .description {
    opacity: 0;
    max-height: 0;
    visibility: hidden;
    overflow: hidden;
    transition: opacity 0.3s ease-out, max-height 0.3s ease-out,
      visibility 0.6s ease-out;

    p {
      text-align: left;
      font-size: 0.9em;
      line-height: 1.7;

      &:first-of-type {
        margin-top: 1.5em;
      }
    }
  }
}

@media (min-width: 730px) {
  .picture {
    font-size: 60px;
    margin: 3rem 0;
  }

  .service {
    margin: 0;
  }
}
</style>
