<template>
  <div class="message">
    <img src="~/assets/main.jpg" alt="Yuto Kawamoto" />
    <div class="container">
      <div class="text">
        <p>
          あったらいいな、こうなったらいいな。
        </p>
        <p>
          誰もが持っている素晴らしいアイデア、<br />
          それを形にするお手伝いができればと考えています。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message'
}
</script>

<style lang="scss" scoped>
.message {
  position: relative;
  padding: 0;

  img {
    width: 100%;
    height: calc(100vw);
    object-fit: cover;
    object-position: 85% 100%;
    display: block;
  }

  .container {
    margin-top: 1em;
  }

  @media (min-width: 730px) {
    img {
      width: 100%;
      height: 400px;
      object-position: 50% 20%;
    }

    .container {
      margin-top: 0;
      font-size: 1em;

      > .text {
        position: absolute;
        top: 160px;
      }
    }
  }

  @media (min-width: 860px) {
    img {
      width: 100%;
      height: 500px;
      object-position: 50% 20%;
    }

    .container {
      margin-top: 0;
      font-size: 1.3em;

      > .text {
        position: absolute;
        top: 160px;
      }
    }
  }

  @media (min-width: 1020px) {
    img {
      height: 550px;
      object-position: 50% 10%;
    }

    .container > .text {
      top: 175px;
    }
  }
}
</style>
