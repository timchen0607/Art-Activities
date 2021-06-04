<template>
  <aside>
    <section class="controller">
      <h2 class="controller-title">Location</h2>
      <select
        class="controller-content skeleton disabled"
        disabled
        v-if="!dataReady"
      ></select>
      <select class="controller-content" v-else v-model="myFilter.city">
        <option value="">不限</option>
        <option :value="item" v-for="item in location" :key="item">
          {{ item }}
        </option>
      </select>
    </section>
    <section class="controller">
      <h2 class="controller-title">Date</h2>
      <div class="controller-content">
        <label class="controller-dateLabel" for="startDate">from</label>
        <input type="date" disabled v-if="!dataReady" />
        <input type="date" id="startDate" v-else v-model="myFilter.start" />
      </div>
      <div class="controller-content">
        <label class="controller-dateLabel" for="endDate">to</label>
        <input type="date" disabled v-if="!dataReady" />
        <input type="date" id="endDate" v-else v-model="myFilter.end" />
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
        <div class="controller-content" @click="myFilter.grade.length = 0">
          <span
            :class="[
              'controller-check',
              { checked: myFilter.grade.length === 0 },
            ]"
          >
            <i class="fas fa-check"></i>
          </span>
          <span>不限</span>
        </div>
        <div class="controller-content" v-for="item in categories" :key="item">
          <span
            :class="[
              'controller-check',
              { checked: myFilter.grade.indexOf(item) >= 0 },
            ]"
          >
            <i class="fas fa-check"></i>
          </span>
          <span>{{ item }}</span>
          <input
            type="checkbox"
            class="controller-checkbox"
            :value="item"
            v-model="myFilter.grade"
          />
        </div>
      </div>
    </section>
  </aside>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Controller",
  props: {
    dataReady: Boolean,
    location: Array,
    categories: Array,
    filter: Object,
  },
  setup(props) {
    const myFilter = reactive(props.filter);
    return { myFilter };
  },
});
</script>
