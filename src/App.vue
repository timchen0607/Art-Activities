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
          v-model="search"
          @keyup.enter="
            filter.search = search;
            search = '';
          "
        />
      </div>
    </div>
  </header>
  <div>
    <div class="container main">
      <Controller
        :dataReady="dataReady"
        :location="location"
        :categories="categories"
        :filter="filter"
      />
      <router-view
        :dataReady="dataReady"
        :activities="activities"
        :filter="filter"
      />
    </div>
    {{ filter }}
  </div>
</template>

<script>
import Controller from "@/components/Controller.vue";
import { computed, defineComponent, reactive, ref } from "vue";
import { data } from "@/modules/data";

export default defineComponent({
  name: "App",
  components: {
    Controller,
  },
  setup() {
    const dataReady = ref(false);
    const activities = reactive([]);
    const location = computed(() => {
      let city = activities.map((x) => x.cityName.substr(0, 3));
      return [...new Set(city)];
    });
    const categories = computed(() => {
      let grade = [];
      activities.forEach((x) => grade.push(...x.grade));
      return [...new Set(grade)];
    });
    const search = ref("");
    const filter = reactive({
      search: "",
      city: "",
      start: "",
      end: "",
      grade: [],
    });

    data().then((json) => {
      json.forEach((x) => {
        x.grade = [
          ...new Set([x.grade1, x.grade2, x.grade3, x.grade4, x.grade5]),
        ];
        x.grade.splice(x.grade.indexOf(""), 1);
      });
      activities.push(...json);
      dataReady.value = true;
      console.log(activities[0]);
    });
    return { dataReady, activities, location, categories, search, filter };
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
