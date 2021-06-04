<template>
  <div class="navigate">
    <router-link
      class="navigate-item"
      :to="{ path: '/Page/', name: 'Home', params: { id: 1 } }"
    >
      <i class="fas fa-angle-double-left"></i>
    </router-link>
    <router-link
      :class="['navigate-item', { active: page === num }]"
      v-for="num in pages"
      :key="num"
      :to="{ path: '/Page/', name: 'Home', params: { id: num } }"
    >
      {{ num }}
    </router-link>
    <router-link
      class="navigate-item"
      :to="{ path: '/Page/', name: 'Home', params: { id: pages } }"
    >
      <i class="fas fa-angle-double-right"></i>
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navigate",
  props: {
    pages: Number,
    page: Number,
  },
});
</script>
