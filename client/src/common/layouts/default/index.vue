<template>
  <div class="app-wrap">
    <Header></Header>
    <main class="app-content w-full">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Header from "../../components/Header.vue"
</script>

<style scoped>
.app-wrap {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
}

.app-content {
  height: calc(100vh - 64px);
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
}
</style>
