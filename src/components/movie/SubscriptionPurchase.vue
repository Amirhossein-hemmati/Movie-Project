<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div class="flex justify-between items-center text-xs bg-[#2E2217] my-2 p-[2px] rounded-md">
    <div class="flex justify-start items-center gap-x-2">
      <span
        class="rounded-[6px] p-2 bg-[#493018] flex justify-center items-center"
      >
        <img src="@/assets/icons/danger.svg" alt="danger" />
      </span>
      <span class="text-sm text-white"
        >پیش از شروع تماشای آنلاین وی پی ان خود را خاموش کنید</span
      >
    </div>
    <button
      class="px-4 py-3 bg-primary text-[#FB7800] border-[0.5px] border-[#FB7800] rounded-[6px] cursor-pointer"
    >
      خرید اشتراک
    </button>
  </div>
</template>
