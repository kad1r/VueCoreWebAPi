<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hola!" />
    <button class="btn btn-primary" @click="change">Change Component</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
  },
  methods: {
    change: function() {
      let random = Math.floor(Math.random() * Math.floor(5));
      console.log(random);
      this.$store.state.app.lastComponent = () =>
        import(`@/views/${this.$store.state.app.comps[random]}.vue`);
    },
  },
};
</script>
