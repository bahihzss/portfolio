<template>
  <section class="services reversed">
    <div class="container">
      <h2>サービス一覧</h2>
      <div class="items">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}

@media (min-width: 730px) {
  .items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5em 2em;
  }
}

@media (min-width: 1020px) {
  .items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5em 2em;
  }
}
</style>
