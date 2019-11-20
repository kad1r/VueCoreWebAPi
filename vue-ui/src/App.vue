<template>
  <div id="app">
    <div id="nav">
      <NavBar :links="null" :userinfo="null"></NavBar>
      <div class="col-12">
        <Toolbar :menuitem="getMenuItem"></Toolbar>
        <keep-alive>
          <component :is="this.$store.state.app.lastComponent"></component>
        </keep-alive>
      </div>
    </div>
    <div class="col">
      <router-view :key="$route.fullPath" />
    </div>
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" @click="showModal=false">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title">Modal title</h4>
                </div>
                <div class="modal-body">
                  modal body
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "app",
  data() {
    return {
      showModal: false,
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
  created() {
    this.$store.state.app.lastComponent = () =>
      import(`@/views/${this.$store.state.app.comps[0]}.vue`);
  },
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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
