<template>
  <header class="header">
    <div class="container">
      <h1 class="header-title">Art Activities</h1>
      <div class="header-search">
        <label for="searchBar" class="header-search-label">
          <i class="fas fa-search"></i>
        </label>
        <input
          type="text"
          class="header-search-input"
          id="searchBar"
          placeholder="Explore your own activities"
        />
      </div>
    </div>
  </header>
  <div>
    <div class="container main">
      <div class="controller">
        <Controller :dataReady="dataReady" />
      </div>
      <router-view :dataReady="dataReady" />
    </div>
  </div>
</template>

<script>
import Controller from "@/components/Controller.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    Controller,
  },
  setup() {
    const dataReady = ref(false);

    return { dataReady };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables";

.header {
  position: sticky;
  top: 0;
  background-color: $c_primary;
  padding: 1rem 0;
  color: $c_light;
  z-index: 10;
  &-title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  &-search {
    display: flex;
    align-items: center;
    max-width: 500px;
    padding: 0.5rem 0;
    border-bottom: 2px solid $c_light;
    &-label {
      margin-right: 1rem;
      font-size: 1.5rem;
    }
    &-input {
      width: 100%;
      font-size: 1.5rem;
      color: $c_light;
      background: none;
      border: none;
      outline: none;
      &::placeholder {
        color: $c_secondary-light;
      }
    }
  }
}
.main {
  align-items: stretch;
}
.controller {
  height: calc(100vh - 80px);
  @include mobile {
    height: auto;
    padding: 0.5rem 0;
  }
}
</style>
