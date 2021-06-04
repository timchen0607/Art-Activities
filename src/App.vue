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
      <Controller :dataReady="dataReady" />
      <router-view :dataReady="dataReady" />
    </div>
  </div>
</template>

<script>
import Controller from "@/components/Controller.vue";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Controller,
  },
  setup() {
    const dataReady = ref(false);
    const activities = reactive([]);
    const url =
      "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        activities.push(...json);
        dataReady.value = true;
      });
    return { dataReady, activities };
  },
});
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
</style>
