<template>
  <aside>
    <section class="controller">
      <h2 class="controller-title">Location</h2>
      <select
        class="controller-content skeleton disabled"
        disabled
        v-if="!dataReady"
      ></select>
      <select class="controller-content" v-else>
        <option value="">Taiwan</option>
        <option value="">Taiwan</option>
        <option value="">Taiwan</option>
      </select>
    </section>
    <section class="controller">
      <h2 class="controller-title">Date</h2>
      <div class="controller-content">
        <label class="controller-dateLabel" for="startDate">from</label>
        <input type="date" disabled v-if="!dataReady" />
        <input type="date" id="startDate" v-else />
      </div>
      <div class="controller-content">
        <label class="controller-dateLabel" for="endDate">to</label>
        <input type="date" disabled v-if="!dataReady" />
        <input type="date" id="endDate" v-else />
      </div>
    </section>
    <section class="controller">
      <h2 class="controller-title">Categories</h2>
      <div v-if="!dataReady">
        <div class="controller-content disabled" v-for="id in 5" :key="id">
          <span class="controller-check">
            <i class="fas fa-check"></i>
          </span>
          <span class="controller-check-text skeleton"></span>
        </div>
      </div>
      <div v-else>
        <div class="controller-content">
          <span class="controller-check">
            <i class="fas fa-check"></i>
          </span>
          <span>All</span>
        </div>
      </div>
    </section>
  </aside>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Controller",
  props: {
    dataReady: Boolean,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables";

.controller {
  padding: 1.5rem;
  background-color: $c_secondary;
  &-title {
    color: $c_dark;
    font-size: 1.5rem;
    font-weight: bold;
  }
  &-content {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    &.disabled {
      cursor: unset;
    }
  }
  & input[type="date"],
  select {
    width: 100%;
    padding: 0.3rem;
    font-size: 1.2rem;
    border: none;
    outline: none;
  }
  &-dateLabel {
    display: inline-block;
    width: 5rem;
    padding-right: 0.7rem;
    text-align: right;
    box-sizing: border-box;
    cursor: pointer;
  }
  &-check {
    width: 25px;
    height: 25px;
    margin-right: 1rem;
    color: $c_light;
    font-size: 1rem;
    font-weight: unset;
    text-align: center;
    line-height: 27px;
    background-color: $c_light;
    border-radius: 3px;
    &-text {
      flex: auto;
      height: 25px;
    }
    &.checked {
      background-color: $c_primary;
    }
  }
}
.controller + .controller {
  border-top: 1px solid $c_secondary-light;
}
</style>
