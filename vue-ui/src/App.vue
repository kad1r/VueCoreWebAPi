<template>
  <div id="app">
    <div id="nav">
      <NavBar :links="null" :userinfo="null"></NavBar>
    </div>
    <div class="row">
      <div class="col">{{year.year}}</div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "app",
  data() {
    return {};
  },
  created() {
    // let user = require("../assets/data/userinfo.json");
    // console.log(JSON.stringify(user));
    // data.user = require("../assets/data/userinfo.json");
  },
  computed: {
    ...mapState(["year"])
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

label {
  text-align: left !important;
}

.requiredField {
  border-left: solid 5px #8e44ad !important;
}

.btn-primary {
  background-color: #8e44ad !important;
  border-color: #8e44ad !important;
}
</style>
