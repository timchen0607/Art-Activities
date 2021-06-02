<template>
  <article class="actItem">
    <div class="actItem-box">
      <img src="https://picsum.photos/200/200?random=1" />
    </div>
    <div class="actItem-content">
      <h3 class="actItem-title">actName</h3>
      <p class="actItem-description">description</p>
      <div>
        <span>org</span>
        <span>grade1-6</span>
      </div>
      <p><i class="fas fa-map-marker-alt"></i>address</p>
      <p><i class="fas fa-calendar-week"></i>startTime-endTime</p>
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
  margin: 1rem 0;
  padding: 0.5rem;
  &-box {
    width: 200px;
    height: 200px;
    img {
      object-fit: cover;
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
}
</style>
