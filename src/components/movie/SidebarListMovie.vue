<script setup lang="ts">
import image from "../../assets/images/Poster.svg";
const data = [
  {
    id: 1,
    title: "فیلم EL CAMINO",
    season: "فصل 1",
    episode: "قسمت 1",
    poster: image,
  },
  {
    id: 2,
    title: "فیلم EL CAMINO",
    season: "فصل 1",
    episode: "قسمت 1",
    poster: image,
  },
  {
    id: 3,
    title: "فیلم EL CAMINO",
    season: "فصل 1",
    episode: "قسمت 1",
    poster: image,
  },
  {
    id: 4,
    title: "فیلم EL CAMINO",
    season: "فصل 1",
    episode: "قسمت 1",
    poster: image,
  },
  {
    id: 5,
    title: "فیلم EL CAMINO",
    season: "فصل 1",
    episode: "قسمت 1",
    poster: image,
  },
  {
    id: 6,
    title: "فیلم EL CAMINO",
    season: "فصل 1",
    episode: "قسمت 1",
    poster: image,
  },
  {
    id: 7,
    title: "فیلم EL CAMINO",
    season: "فصل 1",
    episode: "قسمت 1",
    poster: image,
  },
  {
    id: 8,
    title: "فیلم EL CAMINO",
    season: "فصل 1",
    episode: "قسمت 1",
    poster: image,
  },
];
</script>

<template>
  <div class="h-[464px] overflow-y-auto overflow-x-hidden">
    <div
      v-for="item in data"
      class="w-[370px] h-[112px] flex justify-start items-center gap-x-2 opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer p-[2px]"
      :key="item.id"
    >
      <div>
        <img  :src="item.poster" :alt="item.title" />
      </div>
      <div >
        <span class="font-bold">{{ item.title }}</span>
        <div class="flex justify-start items-center">
          <span class="w-[145px] flex justify-start text-[14px] font-light">{{ item.season }}</span>
          <span class="w-[145px] flex justify-start text-[14px] font-light">{{ item.episode }}</span>
        </div>
        <div class="flex justify-start items-center gap-x-[2px]">
          <!-- fire -->
          <span
            class="w-6 h-6 flex justify-center items-center bg-[#FB7800] p-[2px] rounded-[4px]"
          >
            <img src="../../assets/icons/fire.svg" :alt="`fire + ${item.id}`" />
          </span>

          <!-- subtitle -->
          <div
            class="h-6 flex justify-center items-center bg-[#245DEF] gap-x-[2px] py-1 px-[2px] rounded-[4px]"
          >
            <span>
              <img
                src="../../assets/icons/subtitle.svg"
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
                src="../../assets/icons/dubbed.svg"
                :alt="`dubbed + ${item.id}`"
              />
            </span>
            <span class="text-[12px] font-bold">دوبله</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
