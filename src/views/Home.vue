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
      <Navigate :pages="Math.ceil(showAct.length / 5)" :page="page" />
      <ActItem v-for="act in myShowAct" :key="act.actId" :act="act" />
      <Navigate :pages="Math.ceil(showAct.length / 5)" :page="page" />
    </article>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useRoute } from "vue-router";
import Navigate from "@/components/Navigate.vue";
import ActItem from "@/components/ActItem.vue";
import ActItemLoading from "@/components/ActItemLoading.vue";

export default {
  name: "Home",
  components: {
    Navigate,
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
    return { myFilter, page, myShowAct };
  },
};
</script>
