<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const props = defineProps<{
  maxStars?: number;
  initialRating?: number;
  localStorageKey?: string;
  editable?: boolean;
}>();

const editable = props.editable ?? true;

const maxStars = props.maxStars ?? 5;
const initialRating = props.initialRating ?? 3.5;
const localStorageKey = props.localStorageKey ?? "user-rating-locked";

const userRating = ref<number | null>(null);
const averageRating = ref<number>(initialRating);
const totalVotes = ref<number>(1); // assume one vote for initial average
const hasRated = ref(false);

onMounted(() => {
  hasRated.value = !!localStorage.getItem(localStorageKey);
});

function handleRate(star: number) {
  if (!editable || hasRated.value) return;
  userRating.value = star;
  totalVotes.value++;
  averageRating.value =
    (averageRating.value * (totalVotes.value - 1) + star) / totalVotes.value;
  hasRated.value = true;
  localStorage.setItem(localStorageKey, "1");
}
</script>

<template>
  <div class="flex justify-center items-center gap-2">
    <!-- Stars -->
    <div class="flex gap-1 cursor-pointer">
      <svg
        v-for="star in maxStars"
        :key="star"
        @click="editable && !hasRated ? handleRate(star) : null"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-8 h-8 transition-colors duration-200"
        :class="{
          'text-yellow-400': star <= (userRating ?? averageRating),
          'text-gray-400': star > (userRating ?? averageRating),
          'cursor-pointer': editable && !hasRated,
          'cursor-not-allowed': !editable || hasRated,
        }"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118l-3.36-2.443a1 1 0 00-1.176 0l-3.36 2.443c-.784.57-1.838-.197-1.539-1.118l1.285-3.951a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z"
        />
      </svg>
    </div>

    <!-- Average Display -->
    <div class="flex justify-center items-center">
      <span class="text-[18px]">10/</span>
      <span class="text-[24px] font-bold">
        {{ averageRating.toFixed(1) }}
      </span>
      
      </div>

    <div>
      <img src="../../assets/images/IMDB.svg"/>
    </div>

    <!-- Lock message -->
    <div v-if="hasRated" class="text-xs text-green-400">
      شما قبلاً امتیاز داده‌اید.
    </div>
  </div>
</template>
