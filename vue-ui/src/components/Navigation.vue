<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Vue App</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse mr-auto" id="authentication">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="link in userinfo.links" :key="link.Id">
          <router-link :to="link.url">{{ link.title }}</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li v-if="userinfo.user.id == 0">
          <a href="javascript:void(0)">Login</a>
        </li>
        <li v-else>
          <a data-id="userinfo.user.id" href="javascript:void(0)">{{userinfo.user.fullname}}</a>
        </li>
      </ul>
      <NavigationYears class="ml-auto" @yearChanged="year"></NavigationYears>
      <span style="margin-left:5px;">Selected Year: {{ this.$store.state.year.year }}</span>
    </div>
  </nav>
</template>

<script>
import NavigationYears from "@/components/Years.vue";

export default {
  name: "navbar",
  components: {
    NavigationYears
  },
  data() {
    return {
      userinfo: [],
      year: 2019
    };
  },
  created() {
    if (this.userinfo != null && this.userinfo.length > 0) {
      this.userinfo = require("../assets/data/navigation.json");
    } else {
      this.userinfo = require("../assets/data/userinfo.json");
    }
  }
};
</script>

<style scoped>
nav {
  color: #fff;
}
.navbar-nav li {
  margin-left: 15px;
}
.navbar-nav li a {
  color: #ccc;
  text-decoration: none;
}
.navbar-nav li a:hover {
  color: #fff;
}
.navbar-nav li.active a {
  color: #fff;
}
</style>
