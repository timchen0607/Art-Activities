<template>
  <div class="home">
    <p class="overview">
      Showing <span class="overview-num">15</span> results by…
    </p>
    <div class="tags">
      <div class="tags-item" v-for="id in 5" :key="id">
        <span>Koahsiung</span>
      </div>
    </div>
    <ActItemLoading v-if="!dataReady" />
    <article v-else>
      <ActItem v-for="act in activities" :key="act.actId" />
    </article>
  </div>
</template>

<script>
import ActItem from "@/components/ActItem.vue";
import ActItemLoading from "@/components/ActItemLoading.vue";

export default {
  name: "Home",
  components: {
    ActItem,
    ActItemLoading,
  },
  props: {
    dataReady: Boolean,
    activities: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.home {
  height: calc(100vh - 80px);
  padding: 1.5rem;
  box-sizing: border-box;
  overflow-y: scroll;
  @include mobile {
    height: auto;
    padding: 1.5rem 0;
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
