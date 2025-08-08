<script setup lang="ts">
import { ref } from "vue";
import RatingStars from "./RatingStars.vue";
import RatingSection from "./RatingSection.vue";

const props = defineProps(["movieData"]);
// const qualities = [
//   { label: "کیفیت 480p - webdl", value: "480p" },
//   { label: "کیفیت 720p - webdl", value: "720p" },
//   { label: "کیفیت 1080p - webdl", value: "1080p" },
// ];

// const selectedQuality = ref(qualities[2]);
const isOpen = ref(false);

// function toggleDropdown() {
//   isOpen.value = !isOpen.value;
// }

// function selectQuality(item: { label: string; value: string }) {
//   selectedQuality.value = item;
//   isOpen.value = false;
// }
</script>

<template>
  <div class="flex justify-between items-center py-2">
    <!-- title -->
    <div class="flex items-center justify-between gap-x-2">
      <div class="flex items-center gap-x-2">
        <span>
          <img src="@/assets/images/1080pResolutions.svg" />
        </span>
        <div class="flex flex-col justify-center items-start">
          <span
            class="text-[28px] font-bold flex justify-center items-center gap-x-1"
          >
            <span>سریال</span>
            <span>{{ movieData?.title_en }}</span>
          </span>
          <span class="text-sm flex justify-center items-center gap-x-1">
            <span>{{ movieData?.title_fa }}</span>
            <span>({{ movieData?.year }})</span>
          </span>
        </div>
      </div>
    </div>
    <div class="flex justify-end items-center gap-x-2">
      <!-- chapter -->
      <!-- <div class="min-w-max flex justify-center items-center gap-x-2">
        <span>
          <img src="@/assets/icons/play-circle.svg" alt="play" />
        </span>
        <span class="text-sm font-bold">فصل 3 قسمت 5</span>
      </div> -->

      <!-- Selected Box -->
      <!-- <div class="relative">
        <div
          class="w-[183px] bg-secondary text-white text-sm p-3 rounded-md cursor-pointer flex items-center justify-between"
          @click="toggleDropdown"
        >
          <div
            class="w-full flex items-center justify-center flex-row-reverse gap-2"
          >
            <div>
              <img src="@/assets/icons/left-arrow.svg" class="-rotate-90" />
            </div>
            <span>{{ selectedQuality.label }}</span>
          </div>
        </div>

        <div
          v-if="isOpen"
          class="absolute z-10 w-full mt-2 bg-secondary text-white rounded shadow-lg"
        >
          <div
            v-for="item in qualities"
            :key="item.value"
            @click="selectQuality(item)"
            class="px-4 py-2 hover:bg-gray-700 cursor-pointer text-sm"
          >
            {{ item.label }}
          </div>
        </div>
      </div> -->

      <!-- rating -->
      <RatingStars
        :maxStars="5"
        :width="8"
        :height="8"
        :showResultNumber="true"
        :movieData="movieData"
      />
      <RatingSection :movieData="movieData" />
      <div class="flex justify-center items-center gap-x-2">
        <!-- bookmark -->
        <span
          class="p-3 bg-secondary flex justify-center items-center rounded-sm cursor-pointer"
        >
          <img src="@/assets/icons/bookmark.svg" alt="bookmark" />
        </span>

        <!-- share -->
        <span
          class="p-3 bg-secondary flex justify-center items-center rounded-sm cursor-pointer"
        >
          <img src="@/assets/icons/share.svg" alt="bookmark" />
        </span>
      </div>
    </div>
  </div>
</template>
