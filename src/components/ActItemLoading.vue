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
});
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.actItem {
  display: flex;
  align-items: stretch;
  margin: 1rem 0;
  background-color: $c_light;
  transition: box-shadow 0.5s;
  &-box {
    width: 200px;
    min-height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  &-content {
    flex: auto;
    padding: 1.5rem 1rem;
  }
  &-title {
    color: $c_info;
    font-size: 1.6rem;
    font-weight: bold;
  }
  &-description {
    margin: 1rem 0;
  }
  &-gradeItem {
    display: inline-block;
    margin: 0.5rem;
    padding: 0.3rem 1rem;
    color: $c_light;
    background-color: $c_info;
    border-radius: 1rem;
  }
  &:hover {
    box-shadow: 0 0 5px 1px $c_secondary-dark;
  }
}
</style>
