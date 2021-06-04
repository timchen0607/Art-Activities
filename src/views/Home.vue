<template>
  <div class="home">
    <p class="overview" v-if="dataReady">
      Showing <span class="overview-num">{{ showAct.length }}</span> results by…
    </p>
    <div class="tags">
      <div
        class="tags-item"
        v-if="myFilter.search"
        @click="myFilter.search = ''"
      >
        <span>{{ myFilter.search }}</span>
        <span class="tags-icon"><i class="far fa-times-circle"></i></span>
      </div>
      <div class="tags-item" v-if="myFilter.city" @click="myFilter.city = ''">
        <span>{{ myFilter.city }}</span>
        <span class="tags-icon"><i class="far fa-times-circle"></i></span>
      </div>
      <div class="tags-item" v-for="item in myFilter.grade" :key="item">
        <span>{{ item }}</span>
        <span class="tags-icon"><i class="far fa-times-circle"></i></span>
        <input
          type="checkbox"
          class="tags-checkbox"
          :value="item"
          v-model="myFilter.grade"
        />
      </div>
    </div>
    <ActItemLoading v-if="!dataReady" />
    <article v-else>
      <ActItem v-for="act in myShowAct" :key="act.actId" :act="act" />
      <span v-for="num in Math.ceil(showAct.length / 5)" :key="num">
        <router-link
          :to="{ path: '/Page/', name: 'Home', params: { id: num } }"
        >
          {{ num }}
        </router-link>
      </span>
    </article>
  </div>
</template>

<script>
import ActItem from "@/components/ActItem.vue";
import ActItemLoading from "@/components/ActItemLoading.vue";
import { computed, reactive } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Home",
  components: {
    ActItem,
    ActItemLoading,
  },
  props: {
    dataReady: Boolean,
    perPage: Number,
    showAct: Array,
    filter: Object,
  },
  setup(props) {
    const route = useRoute();
    const myFilter = reactive(props.filter);
    const page = computed(() => route.params.id);
    const myShowAct = computed(() =>
      props.showAct.slice(
        (page.value - 1) * props.perPage,
        page.value * props.perPage
      )
    );
    console.log(myShowAct);
    return { myFilter, page, myShowAct };
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
    position: relative;
    margin: 0.5rem;
    padding: 0.5rem 2.5rem 0.5rem 1.5rem;
    color: $c_info;
    border: 1px solid $c_info;
    border-radius: 1rem;
    transition: color 0.5s, background-color 0.5s;
    cursor: pointer;
    &:hover {
      color: $c_light;
      background-color: $c_info;
    }
  }
  &-icon {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
  }
  &-checkbox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;
    opacity: 0;
  }
}
</style>
