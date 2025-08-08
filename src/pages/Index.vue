<script setup lang="ts">
import { onMounted, ref } from "vue";
import BackButton from "../components/common/BackButton.vue";
import PlayerType from "../components/movie/PlayerType.vue";
import SidebarListMovie from "../components/movie/SidebarListMovie.vue";
import SubscriptionPurchase from "../components/movie/SubscriptionPurchase.vue";
import VideoInformation from "../components/movie/VideoInformation.vue";
import VideoPlayArea from "../components/movie/VideoPlayArea.vue";
import { apiGetAllMovies } from "../api/movie";
import { useMovieData } from "@/store/useMovieData";

const isLoading = ref();
const data = useMovieData();

function getAllMovie() {
  isLoading.value = true;
  apiGetAllMovies()
    .then((result) => {
      console.log(result);
      data.setMovieData(result);
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
  <VideoInformation :movieData="data.movieData" />
  <div class="flex justify-center items-start gap-x-6">
    <div class="w-3/5">
      <VideoPlayArea />
      <PlayerType />
      <SubscriptionPurchase />
    </div>
    <div class="w-2/5 h-full">
      <SidebarListMovie :episodes="data.movieData?.episodes" />
    </div>
  </div>
</template>
