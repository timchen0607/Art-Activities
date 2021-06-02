<template>
  <article>
    <img src="https://picsum.photos/200/200?random=1" />
    <div>
      <h3>actName</h3>
      <p>description</p>
      <span>org</span>
      <span>grade1-6</span>
      <p>address</p>
      <p>startTime-endTime</p>
    </div>
  </article>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ActItem",
});
</script>

<style lang="scss"></style>
