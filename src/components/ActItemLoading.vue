<template>
  <article class="actItem">
    <div class="actItem-box skeleton"></div>
    <div class="actItem-content">
      <h3 class="actItem-title skeleton"></h3>
      <p class="actItem-description skeleton"></p>
      <p class="actItem-description skeleton"></p>
    </div>
  </article>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ActItem",
});
</script>

<style lang="scss" scoped>
.actItem {
  &-title {
    width: 200px;
    height: 1.6rem;
  }
  &-description {
    height: 3rem;
  }
}
</style>
