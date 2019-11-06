<template>
  <div id="app">
    <div id="nav">
      <NavBar :links="null" :userinfo="null"></NavBar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  created() {
    // let user = require("../assets/data/userinfo.json");
    // console.log(JSON.stringify(user));
    // data.user = require("../assets/data/userinfo.json");
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto|Rubik&display=swap&subset=latin-ext");

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
