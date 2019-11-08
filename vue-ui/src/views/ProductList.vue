<template>
  <div></div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "name",
  data() {
    return {
      product: {}
    };
  },
  validations: {
    product: {
      category: { required },
      heading: { required, minLength: minLength(4) },
      description: { required }
    }
  },
  methods: {
    onClick: function(object) {
      console.log("onClick -> object");
    }
  },
  mounted() {
    console.log("mounted!");
  },
  created() {
    // fetch(url)
    //   .then(res => { res.json(); })
    //   .then(function(response) {
    //     this.links = response;
    //   });
  }
};
</script>