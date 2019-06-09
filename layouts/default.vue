<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:200,300|Noto+Sans+JP:300,400&display=swap');

:root {
  --color-primary: #4183b8;
  --color-secondary: #3b6080;
  --color-dark: #222233;

  --color-title: #35495e;
  --color-subtitle: #526488;
  --color-reversed-text: #ddd;
}

html {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 300;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

section {
  padding: 2em 0;

  &.reversed {
    font-weight: 400;
    background: var(--color-dark);
    color: var(--color-reversed-text);
  }
}

@media (min-width: 730px) {
  section {
    padding: 5em 0;
  }
}

h1,
h2,
h3 {
  font-weight: 500;
  margin-bottom: 0.6em;
}

@media (min-width: 630px) {
  h1,
  h2,
  h3 {
    margin-bottom: 2em;
  }
}

p {
  line-height: 1.7;
  margin-bottom: 0.8em;
}

ul {
  padding: 0;
  list-style: none;
}

.button {
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 30px;
  transition: all 0.3s ease-out;
}

.button.primary {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

.button.primary:hover {
  color: #fff;
  background-color: var(--color-primary);
}

.button.secondary {
  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
}

.button.secondary:hover {
  color: #fff;
  background-color: var(--color-secondary);
}

.container {
  width: 100%;
  padding: 0 20px;
}

@media (min-width: 730px) {
  .container {
    width: 630px;
    margin: 0 auto;
    padding: 0 16px;
  }
}

@media (min-width: 860px) {
  .container {
    width: 760px;
    margin: 0 auto;
  }
}

@media (min-width: 1020px) {
  .container {
    width: 960px;
    margin: 0 auto;
  }
}
</style>
