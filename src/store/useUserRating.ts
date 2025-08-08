import { ref } from "vue";
import { defineStore } from "pinia";
import { UserRating } from "@/types/movie";

export const useUserRating = defineStore("UserRating", () => {
  const userRatingInf = ref<UserRating | null>(null);

  function setUserRate(data: UserRating) {
    userRatingInf.value = data;
  }

  return {
    userRatingInf,
    setUserRate,
  };
});
