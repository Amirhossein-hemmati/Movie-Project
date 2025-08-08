<script setup lang="ts">
import { onMounted, ref } from "vue";
import BackButton from "../components/common/BackButton.vue";
import PlayerType from "../components/movie/PlayerType.vue";
import SidebarListMovie from "../components/movie/SidebarListMovie.vue";
import SubscriptionPurchase from "../components/movie/SubscriptionPurchase.vue";
import VideoInformation from "../components/movie/VideoInformation.vue";
import VideoPlayArea from "../components/movie/VideoPlayArea.vue";
import { apiGetAllMovies } from "@/api/movie";
import { useUserRating } from "@/store/useUserRating";

const isLoading = ref();
const data = ref();
const userRating = useUserRating();

function getAllMovieData() {
  isLoading.value = true;
  apiGetAllMovies()
    .then((result) => {
      data.value = result;
      userRating.setUserRate({
        id: result?.id,
        rating: result?.user_rating,
      });
    })
    .catch((e) => console.log(e))
    .finally(() => {
      isLoading.value = false;
    });
}

onMounted(() => {
  getAllMovieData();
});
</script>

<template>
  <div
    v-if="isLoading"
    class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center"
  >
    در حال دریافت اطلاعات
  </div>

  <div v-else>
    <div class="w-full flex justify-end mt-2">
      <BackButton />
    </div>
    <VideoInformation :movieData="data" />
    <div class="flex justify-center items-start gap-x-6">
      <div class="w-[65%]">
        <VideoPlayArea :cover="data?.poster"/>
        <PlayerType />
        <SubscriptionPurchase />
      </div>
      <div class="w-[35%] h-full">
        <SidebarListMovie :movieData="data" />
      </div>
    </div>
  </div>
</template>
