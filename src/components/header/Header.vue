<script setup lang="ts">
import webLogo from "../../assets/images/FilmTarsnakLogo.svg";
const style = {
  link: "font-bold cursor-pointer",
  menu: "w-12 h-12 bg-[#1B1C1F] flex justify-center items-center rounded-[4px] cursor-pointer",
};
</script>

<template>
  <div
    class="sticky top-0 z-50 w-full bg-[#242629] text-white flex justify-between items-center !px-30 !py-2"
  >
    <div class="flex justify-center items-center gap-x-6">
      <span>
        <img :src="webLogo" alt="Filmtarsnak-Logo" />
      </span>
      <div class="flex justify-center items-center gap-x-6">
        <a :class="style.link">دسته بندی‌ها</a>
        <a :class="style.link">فیلم</a>
        <a :class="style.link">سریال</a>
        <a :class="style.link">بازیگران</a>
        <a :class="style.link">جدید ترین دوبله ها</a>
      </div>
    </div>
    <div class="flex justify-center items-center gap-1">
      <!-- left arrow -->
      <span class="w-6 h-6 flex justify-center items-center cursor-pointer">
        <img src="../../assets/icons/left-arrow.svg" alt="left-Arrow" />
      </span>

      <!-- bell -->
      <span :class="style.menu">
        <img src="../../assets/icons/bell.svg" alt="bell" />
      </span>

      <!-- bookmarks -->
      <span :class="style.menu">
        <img src="../../assets/icons/bookmarks.svg" alt="bookmarks" />
      </span>

      <!-- search -->
      <span :class="style.menu">
        <img src="../../assets/icons/search.svg" alt="search" />
      </span>

      <!-- profile -->
      <span :class="style.menu">
        <img src="../../assets/icons/profile.svg" alt="profile" />
      </span>
    </div>
  </div>
</template>
