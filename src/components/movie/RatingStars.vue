<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useUserRating } from "@/store/useUserRating";
import { useOpenSurveyStore } from "@/store/useOpenSurveyStore";

const props = defineProps(["movieData", "maxStars"]);
const userRating = useUserRating();
const content = useOpenSurveyStore();
const maxStars = props.maxStars ?? 5;
const starSize = 32;
const storageKey = `movie-rated-${props.movieData?.id}`;
const storedSurvey = ref(localStorage.getItem(storageKey));
const rating = computed(() => userRating?.userRatingInf?.rating ?? 0);

function getStarFill(index: number): number {
  if (index <= Math.floor(rating.value)) return 100;
  if (index === Math.floor(rating.value) + 1) {
    return (rating.value - Math.floor(rating.value)) * 100;
  }
  return 0;
}

function handleOpenSurvey() {
  if (!storedSurvey.value) {
    content.openContent?.();
  } else {
    alert("شما قبلا نظر خود را درباره این سریال وارد کرده اید.");
  }
}

watch(rating, (newVal) => {
  if (newVal > 0 && !storedSurvey.value) {
    localStorage.setItem(storageKey, "true");
    storedSurvey.value = "true"
  }
})
</script>


<template>
  <div
    class="flex justify-center items-center gap-x-1"
    :class="{ 'cursor-pointer': !storedSurvey }"
    style="direction: ltr"
    :title="storedSurvey ? '' : 'نظرسنجی کنید'"
    @click="handleOpenSurvey"
  >
    <div
      v-for="star in maxStars"
      :key="star"
      class="relative"
      :style="{ width: `${starSize}px`, height: `${starSize}px` }"
    >
      <!-- Gray background star (always full) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-gray-300 absolute top-0 left-0 w-full h-full"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118l-3.36-2.443a1 1 0 00-1.176 0l-3.36 2.443c-.784.57-1.838-.197-1.539-1.118l1.285-3.951a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z"
        />
      </svg>

      <!-- Yellow foreground star with mask for partial fill -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-yellow-400 absolute top-0 left-0 w-full h-full"
        :style="{ clipPath: `inset(0 ${100 - getStarFill(star)}% 0 0)` }"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118l-3.36-2.443a1 1 0 00-1.176 0l-3.36 2.443c-.784.57-1.838-.197-1.539-1.118l1.285-3.951a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z"
        />
      </svg>
    </div>
    <div class="h-full text-[12px] flex justify-center items-end">
      <span>امتیاز کاربران</span>
      <span>({{ rating }})</span>
    </div>
  </div>
</template>
