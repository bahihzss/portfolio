<template>
  <header>
    <div class="container">
      <a class="brand" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.67 206.79">
          <polygon
            fill="#3a5e7c"
            points="167.42 0 0 29.52 31.26 206.79 167.42 0"
          />
          <polygon
            fill="#3f7dae"
            points="198.67 177.26 31.26 206.79 0 29.52 198.67 177.26"
          />
          <polygon
            fill="#324658"
            points="99.34 103.39 31.26 206.79 0 29.52 99.34 103.39"
          />
        </svg>
        <span>
          {{ title }}
        </span>
      </a>
      <div class="social">
        <a
          href="https://www.wantedly.com/users/90652610"
          target="_blank"
          title="Wantedly"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 700 482.84"
            style="height: 15px;"
          >
            <polygon
              fill="#00AED1"
              points="0 0 100 0 250 362.13 300 241.42 200 0 300 0 350 120.71 400 0 500 0 400 241.42 450 362.13 600 0 700 0 500 482.84 400 482.84 350 362.13 300 482.84 200 482.84 0 0"
            />
          </svg>
        </a>
        <a href="https://github.com/bahihzss" target="_blank" title="GitHub">
          <font-awesome-icon
            :icon="['fab', 'github']"
            style="color: #333; font-size: 18px;"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  z-index: 9999;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  height: 70px;
  padding: 0 1.5em;
  background: rgba(255, 255, 255, 0.8);

  > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
}

a.brand {
  font-family: 'Nunito', sans-serif;
  font-weight: 200;
  font-size: 18px;
  color: var(--color-title);

  display: flex;
  align-items: center;

  padding: 0;
  text-decoration: none;
  text-transform: uppercase;

  > svg {
    height: 18px;
    width: auto;
    margin-right: 8px;
  }
}

.social {
  display: flex;
  align-items: center;

  > a {
    display: flex;
    align-items: center;
  }

  > *:not(:last-child) {
    margin-right: 1em;
  }
}
</style>
