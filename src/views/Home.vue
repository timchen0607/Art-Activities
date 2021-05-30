<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Controller></Controller>
  </div>
</template>

<script>
// @ is an alias to /src
import Controller from "@/components/Controller.vue";

export default {
  name: "Home",
  components: {
    Controller,
  },
};
</script>
