<template>
  <aside>
    <section>
      <h2>Location</h2>
      <div>
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
    </section>
    <section>
      <h2>Date</h2>
      <div>
        <label for="">from</label>
        <input type="date" />
      </div>
      <div>
        <label for="">to</label>
        <input type="date" />
      </div>
    </section>
    <section>
      <h2>Categories</h2>
      <div>
        <input type="checkbox" />
        <label for="">All</label>
      </div>
      <div>
        <input type="checkbox" />
        <label for="">All</label>
      </div>
      <div>
        <input type="checkbox" />
        <label for="">All</label>
      </div>
      <div>
        <input type="checkbox" />
        <label for="">All</label>
      </div>
      <div>
        <input type="checkbox" />
        <label for="">All</label>
      </div>
    </section>
  </aside>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Controller",
});
</script>

<style lang="scss"></style>
