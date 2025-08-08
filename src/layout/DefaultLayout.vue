<!-- src/layouts/DefaultLayout.vue -->
<script setup lang="ts">
import Header from "../components/header/Header.vue";
</script>

<template>
  <div class="max-w-[2100px] w-[2100px] flex justify-center items-center flex-col">
    <Header />
    <main class="!px-30 w-full h-full">
      <RouterView />
    </main>
  </div>
</template>
