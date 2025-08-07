<script setup lang="ts">
import { onMounted, ref } from "vue";
import BackButton from "../components/common/BackButton.vue";
import PlayerType from "../components/movie/PlayerType.vue";
import SidebarListMovie from "../components/movie/SidebarListMovie.vue";
import SubscriptionPurchase from "../components/movie/SubscriptionPurchase.vue";
import VideoInformation from "../components/movie/VideoInformation.vue";
import VideoPlayArea from "../components/movie/VideoPlayArea.vue";
import { apiGetAllMovies } from "../api/movie";

const movieData = ref();
const isLoading = ref();

function getAllMovie() {
  isLoading.value = true;
  apiGetAllMovies()
    .then((result) => {
      console.log(result);
      movieData.value = result;
    })
    .catch((e) => {
      console.log(e?.message || e);
    })
    .finally(() => {
      isLoading.value = false;
    });
}

onMounted(() => {
  getAllMovie();
});
</script>

<template>
  <div class="w-full flex justify-end mt-2">
    <BackButton />
  </div>
  <VideoInformation :movieData="movieData" />
  <div class="flex justify-center items-start gap-x-6">
    <div class="w-2/3">
      <VideoPlayArea />
      <PlayerType />
      <SubscriptionPurchase />
    </div>
    <div class="w-1/3 h-full">
      <SidebarListMovie :episodes="movieData?.episodes" />
    </div>
  </div>
</template>
