<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  /* font-family: inherit, Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

html,
body,
pre,
code,
kbd,
samp {
  font-family: "font-family you want to use";
}

.pokemon {
  width: 40%;
  filter: contrast(0%);
}

.pokemonActive {
  width: 40%;
  filter: contrast(100%);
}

.nes-input {
  width: 80% !important;
}

.search {
  display: flex;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
}

.home {
  border: solid;
  padding: 5%;
  margin-top: 4%;
}

.footer {
  float: right;
  margin-right: 5%;
}

.correctAns {
  background-color: greenyellow;
}

.inccorrectAns {
  background-color: indianred;
}

.normal {
  background-color: none;
}
</style>
