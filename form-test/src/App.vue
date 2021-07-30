<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  overflow: auto;
  height: 100%;
  width: 100%;
}

body {
  background: #0a5162;
}
#app {
  display: flex;
  justify-content: center;
}
body,
input,
button,
textarea {
  font: 500 1rem Roboto;
  color: #fff;
}
</style>
