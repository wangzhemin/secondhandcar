<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
ul,
li {
  text-decoration: none;
  list-style-type: none;
}
li:hover {
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5 {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  outline: 0;
  font-weight: 400;
  cursor: pointer;
}
</style>
