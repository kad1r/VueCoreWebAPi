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

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="link in userinfo.links" :key="link.Id">
          <router-link :to="link.url">{{link.title}}</router-link>
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
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      userinfo: []
    };
  },
  created() {
    if (this.userinfo != null && this.userinfo.length > 0) {
      this.userinfo = require("../assets/data/navigation.json");
    } else {
      this.userinfo = require("../assets/data/userinfo.json");
    }

    console.log("navigation imported!");

    // fetch(url)
    //   .then(res => {
    //     console.log(res);
    //     res.json();
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //     this.links = response;
    //   });
  }
};
</script>

<style scoped>
nav {
  margin-bottom: 30px;
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