<template>
  <div v-show="show" class="Logo" :class="[{ rotated }]">
    <div class="Triangle two" />
    <div class="Triangle one" />
    <div class="Triangle three" />
  </div>
</template>

<script>
import sleep from '~/helpers/sleep'

export default {
  name: 'Logo',

  data() {
    return {
      show: false,
      rotated: false
    }
  },

  methods: {
    async start() {
      this.show = true
      await sleep(2200)
    },

    async rotate() {
      this.rotated = true
      await sleep(1200)
    }
  }
}
</script>

<style>
.Logo {
  display: inline-block;
  transform: rotate(-90deg);
  position: relative;
  overflow: hidden;
  transition: transform 0.8s ease-in-out;
  animation: draw-logo 1s ease-out forwards;
  height: 0;
  width: 0;
}

.Logo.rotated {
  transform: rotate(-10deg);
}

@keyframes draw-logo {
  100% {
    height: 180px;
    width: 170px;
  }
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle.one {
  border-bottom: 0 solid #4183b8;
  border-right: 0 solid transparent;
  animation: draw-one 1s ease-out forwards;
}

@keyframes draw-one {
  100% {
    border-right-width: 170px;
    border-bottom-width: 180px;
  }
}

.Triangle.two {
  border-right: 0 solid transparent;
  border-top: 0 solid #3b6080;
  animation: draw-two 0.8s linear forwards 1s;
}

@keyframes draw-two {
  100% {
    border-top-width: 180px;
    border-right-width: 170px;
  }
}

.Triangle.three {
  border-left: 0 solid #33475a;
  border-top: 0 solid transparent;
  border-bottom: 0 solid transparent;
  animation: draw-three 0.8s linear forwards 1s;
}

@keyframes draw-three {
  100% {
    border-left-width: 85px;
    border-top-width: 90px;
    border-bottom-width: 90px;
  }
}
</style>
