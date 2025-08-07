<script setup lang="ts">
import { ref } from "vue";
import RatingStars from "../common/RatingStars.vue";

const qualities = [
  { label: "کیفیت 480p - webdl", value: "480p" },
  { label: "کیفیت 720p - webdl", value: "720p" },
  { label: "کیفیت 1080p - webdl", value: "1080p" },
];

const selectedQuality = ref(qualities[2]);
const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectQuality(item: { label: string; value: string }) {
  selectedQuality.value = item;
  isOpen.value = false;
}
</script>

<template>
  <div class="flex justify-start items-center gap-x-2 py-2">
    <!-- title -->
    <div class="w-[400px] flex items-center justify-start gap-x-2">
      <span>
        <img src="../../assets//images/1080pResolutions.svg" />
      </span>
      <div class="flex flex-col justify-center items-start gap-x-2">
        <span class="text-[28px] font-bold">سریال EL Camino</span>
        <span class="text-[14px]">فیلم ال کامینو</span>
      </div>
    </div>

    <!-- chapter -->
    <div class="flex justify-center items-center gap-x-2 p-3">
      <span>
        <img src="../../assets/icons/play-circle.svg" alt="play" />
      </span>
      <span class="text-[14px] font-bold">فصل 3 قسمت 5</span>
    </div>
    <div class="relative">
      <!-- Selected Box -->
      <div
        class="w-[183px] bg-[#242629] text-white text-[14px] p-3 rounded-[4px] cursor-pointer flex items-center justify-between"
        @click="toggleDropdown"
      >
        <div
          class="w-full flex items-center justify-center flex-row-reverse gap-2"
        >
          <!-- Arrow Icon -->
          <div>
            <img src="../../assets/icons/left-arrow.svg" class="-rotate-90" />
          </div>
          <span>{{ selectedQuality.label }}</span>
        </div>
      </div>

      <!-- Dropdown Options -->
      <div
        v-if="isOpen"
        class="absolute z-10 w-full mt-2 bg-[#242629] text-white rounded shadow-lg"
      >
        <div
          v-for="item in qualities"
          :key="item.value"
          @click="selectQuality(item)"
          class="px-4 py-2 hover:bg-gray-700 cursor-pointer text-[14px]"
        >
          {{ item.label }}
        </div>
      </div>
    </div>

    <!-- rating -->
    <RatingStars />
    <div class="flex justify-center items-center gap-x-2">
      <!-- bookmark -->
      <span
        class="p-3 bg-[#242629] flex justify-center items-center rounded-[4px] cursor-pointer"
      >
        <img src="../../assets/icons/bookmark.svg" alt="bookmark" />
      </span>

      <!-- share -->
      <span
        class="p-3 bg-[#242629] flex justify-center items-center rounded-[4px] cursor-pointer"
      >
        <img src="../../assets/icons/share.svg" alt="bookmark" />
      </span>
    </div>
  </div>
</template>
