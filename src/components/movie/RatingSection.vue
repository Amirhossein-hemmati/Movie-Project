<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps(["movieData"]);
</script>

<template>
  <div class="flex justify-center items-center gap-2">
    <!-- Average Display -->
    <div v-if="movieData?.imdb" class="flex justify-center items-center gap-x-1">
      <span class="text-[18px]">10/</span>
      <span class="text-[24px] font-bold">
        {{ movieData?.imdb }}
      </span>

      <div class="w-full h-full">
        <img class="w-6 h-6" src="@/assets/images/rottenTomatoes.svg" />
      </div>
    </div>
    <div v-if="movieData?.rotten" class="flex justify-center items-center gap-x-1">
      <span class="text-[18px]">10/</span>
      <span class="text-[24px] font-bold">
        {{ movieData?.rotten }}
      </span>

      <div class="w-full h-full">
        <img class="w-6 h-6" src="@/assets/images/IMDB.svg" />
      </div>
    </div>
    <div v-if="movieData?.metacritic" class="flex justify-center items-center gap-x-1">
      <span class="text-[24px] font-bold">
        {{ movieData?.metacritic }}
      </span>

      <div class="w-full h-full">
        <img class="w-6 h-6" src="@/assets/images/metacritic.svg" />
      </div>
    </div>
  </div>
</template>
