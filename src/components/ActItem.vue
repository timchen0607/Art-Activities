<template>
  <article class="actItem">
    <div class="actItem-box">
      <!-- <img :src="'https://picsum.photos/200/200?random=' + act.actId" /> -->
      <img :src="'https://cloud.culture.tw/' + act.imageUrl" />
    </div>
    <div class="actItem-content">
      <h3 class="actItem-title">{{ act.actName }}</h3>
      <p class="actItem-description">{{ act.description }}</p>
      <p class="actItem-attr">
        <i class="fas fa-landmark fa-fw"></i>
        <span>主辦單位：{{ act.org }}</span>
      </p>
      <p class="actItem-attr">
        <i class="fas fa-map-marker-alt fa-fw"></i>
        <span>活動地點：{{ act.address }}</span>
      </p>
      <p class="actItem-attr">
        <i class="fas fa-calendar-week fa-fw"></i>
        <span
          >辦理期間： {{ act.startTime.substring(0, 12) }} ~
          {{ act.endTime.substring(0, 12) }}
        </span>
      </p>
      <span class="actItem-gradeItem" v-for="item in act.grade" :key="item">
        {{ item }}
      </span>
    </div>
  </article>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ActItem",
  props: {
    act: Object,
  },
  setup() {
    return {};
  },
});
</script>
