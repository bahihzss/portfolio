<template>
  <span class="blinking" :style="[{ backgroundColor: color }]">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'BlinkCursor',

  props: {
    color: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style scoped>
.blinking {
  display: inline-block;
  height: 0.8em;
  width: 0.3em;
  -webkit-animation: blink 0.5s ease-in-out infinite alternate;
  -moz-animation: blink 0.5s ease-in-out infinite alternate;
  animation: blink 0.5s ease-in-out infinite alternate;
}

@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
