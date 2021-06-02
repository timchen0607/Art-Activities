<template>
  <div class="home">
    <p class="overview">
      Showing <span class="overview-num">15</span> results by…
    </p>
    <div class="tags">
      <div class="tags-item" v-for="id in 5" :key="id">
        <span>Koahsiung</span>
        <!-- <input type="checkbox" /> -->
      </div>
    </div>
    <ActItem></ActItem>
  </div>
</template>

<script>
import ActItem from "@/components/ActItem.vue";

export default {
  name: "Home",
  components: {
    ActItem,
  },
  props: {
    dataReady: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.home {
  overflow-y: scroll;
  padding: 1.5rem;
  @include mobile {
    padding: unset;
  }
}
.overview {
  font-size: 1.5rem;
  font-weight: bold;
  &-num {
    color: $c_info;
    font-size: 2rem;
  }
}
.tags {
  display: flex;
  flex-wrap: wrap;
  &-item {
    margin: 0.5rem;
    padding: 0.5rem 1.5rem;
    color: $c_info;
    border: 1px solid $c_info;
    border-radius: 1rem;
    cursor: pointer;
  }
}
</style>
