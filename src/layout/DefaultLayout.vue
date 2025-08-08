<!-- src/layouts/DefaultLayout.vue -->
<script setup lang="ts">
import Header from "../components/header/Header.vue";
</script>

<template>
  <div>
    <Header />
    <main class="!px-30 h-full">
      <RouterView />
    </main>
  </div>
</template>
