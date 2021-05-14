<template>
  <div class="layout">
    <Layout></Layout>
  </div>
  <div class="center">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Layout: defineAsyncComponent(() => import("@/layout/index.vue")),
  },
});
</script>

<style lang="scss">
html {
  font-size: 1vw;
}

@media screen and (min-width: 1366px) {
  html {
    /* 控制1366-1920 fontsize在 14-18px */
    font-size: calc(87.5% + 4 * (100vw - 1366px) / 554);
    font-size: calc(14px + 4 * (100vw - 1366px) / 554);
  }
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
</style>
