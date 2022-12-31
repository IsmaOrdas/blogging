<template>
  <div class="app-wrap">
    <Header></Header>
    <main class="app-content">
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
    max-width: 1280px;
    margin: 0 auto;
  padding: 24px 24px 16px 0;
}
</style>
