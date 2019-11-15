<template>
  <div id="app">
    <div id="nav">
      <NavBar :links="null" :userinfo="null"></NavBar>
      <div class="col-12">
        <Toolbar :menuitem="getMenuItem"></Toolbar>
      </div>
    </div>
    <div class="col">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "app",
  data() {
    return {
      saveFunction: Function,
      editFunction: Function,
      deleteFunction: Function,
      clearFormFunction: Function,
      exportFunction: Function,
    };
  },
  mounted() {
    console.log("app mounted!");
  },
  created() {},
  computed: {
    ...mapState(["app", "year", "productpage", "productlist"]),
    getMenuItem: function() {
      let menu = {},
        menu_id = 0,
        user = require("./assets/data/userinfo.json");

      if (typeof this.$route.query.menu_id !== "undefined") {
        menu_id = parseInt(this.$route.query.menu_id);

        menu = user.links.filter((x) => x.id === menu_id)[0];
      }

      return menu;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto|Rubik&display=swap&subset=latin-ext");

* {
  font-size: 15px;
}

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
