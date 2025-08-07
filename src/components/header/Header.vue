<script setup lang="ts">
import webLogo from "../../assets/images/FilmTarsnakLogo.svg";
</script>

<template>
  <div
    class="w-full bg-[#242629] text-white flex flex-row-reverse justify-between items-center"
  >
    <div class="flex justify-center items-center  gap-x-6">
        <div class="flex justify-center items-center  gap-x-6">
            <a>دسته بندی‌ها</a>
            <a>فیلم</a>
            <a>سریال</a>
            <a>بازیگران</a>
        </div>
        <span>
          <img :src="webLogo" />
        </span>
    </div>
    <div></div>
  </div>
</template>
