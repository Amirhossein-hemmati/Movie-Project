<script setup lang="ts">
import { computed } from "vue";
import { useOpenSurveyStore } from "@/store/useOpenSurveyStore";
import SurveyMovie from "./SurveyMovie.vue";

const props = defineProps(["movieData"]);
const content = useOpenSurveyStore();
const isOpen = computed(() => content.isOpen)
</script>

<template>
  <div class="h-[464px] overflow-y-auto">
    <div
      v-if="!isOpen"
      v-for="item in movieData?.episodes"
      class="h-[122px] flex justify-start items-center gap-x-2 opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer p-[2px]"
      :key="item.number"
    >
      <div>
        <img
          class="w-[88px] h-full rounded-[4px]"
          :src="item.poster"
          :alt="item.title"
        />
      </div>
      <div>
        <span class="font-bold">{{ item.title }}</span>
        <div
          v-if="item.season && item.episode"
          class="flex justify-start items-center"
        >
          <span class="w-[145px] flex justify-start text-[14px] font-light">{{
            item.season
          }}</span>
          <span class="w-[145px] flex justify-start text-[14px] font-light">{{
            item.episode
          }}</span>
        </div>
        <div class="flex justify-start items-center gap-x-[2px]">
          <!-- fire -->
          <span
            class="w-6 h-6 flex justify-center items-center bg-[#FB7800] p-[2px] rounded-[4px]"
          >
            <img src="@/assets/icons/fire.svg" :alt="`fire + ${item.id}`" />
          </span>

          <!-- subtitle -->
          <div
            class="h-6 flex justify-center items-center bg-[#245DEF] gap-x-[2px] py-1 px-[2px] rounded-[4px]"
          >
            <span>
              <img
                src="@/assets/icons/subtitle.svg"
                :alt="`subtitle + ${item.id}`"
              />
            </span>
            <span class="text-[12px] font-bold">زیرنویس</span>
          </div>

          <!-- dubbed movie -->
          <div
            class="h-6 flex justify-center items-center bg-[#43B100] gap-x-[2px] p-1 rounded-[4px]"
          >
            <span>
              <img
                src="@/assets/icons/dubbed.svg"
                :alt="`dubbed + ${item.id}`"
              />
            </span>
            <span class="text-[12px] font-bold">دوبله</span>
          </div>
        </div>
      </div>
    </div>
    <SurveyMovie :movieData="movieData" v-else/>
  </div>
</template>
