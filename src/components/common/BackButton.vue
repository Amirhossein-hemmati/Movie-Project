<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()


function handleBackButton () {

}
</script>

<template>
  <button
    class=" bg-secondary text-white flex justify-between items-center px-4 py-3 rounded-sm gap-x-1"
    @click="handleBackButton"
  >
    <span class="text-sm font-bold"> بازگشت </span>
    <!-- left arrow -->
    <span class="w-6 h-6 flex justify-center items-center cursor-pointer">
      <img src="@/assets/icons/left-arrow.svg" alt="left-Arrow" />
    </span>
  </button>
</template>
