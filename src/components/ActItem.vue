<template>
  <article class="actItem">
    <div class="actItem-box">
      <img src="https://picsum.photos/200/200?random=1" />
    </div>
    <div class="actItem-content">
      <h3 class="actItem-title">actName</h3>
      <p class="actItem-description">description</p>
      <p class="actItem-org">
        <i class="fas fa-landmark"></i>
        <span>主辦單位：org</span>
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i>
        <span>活動地點：address</span>
      </p>
      <p>
        <i class="fas fa-calendar-week"></i>
        <span>辦理期間：startTime-endTime</span>
      </p>
      <span class="actItem-gradeItem" v-for="id in 3" :key="id">grade</span>
    </div>
  </article>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ActItem",
  props: {
    activities: Array,
  },
});
</script>
