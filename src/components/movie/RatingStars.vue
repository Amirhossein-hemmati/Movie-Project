<script setup lang="ts">
import { computed } from 'vue'
import { useMovieData } from '@/store/useMovieData'

const props = defineProps<{
  maxStars?: number
}>()

const maxStars = props.maxStars ?? 5
const starSize = 32

const data = useMovieData()
const rating = computed(() => data.movieData?.user_rating ?? 0)

/**
 * Returns fill percentage for the star at the given index:
 * - 100% if star index <= floor(rating)
 * - fractional part * 100 for the next star if rating is fractional
 * - 0 otherwise
 */
function getStarFill(index: number): number {
  if (index <= Math.floor(rating.value)) return 100
  if (index === Math.floor(rating.value) + 1) {
    return (rating.value - Math.floor(rating.value)) * 100
  }
  return 0
}
</script>

<template>
  <div class="flex gap-1" style="direction: ltr">
    <div
      v-for="star in maxStars"
      :key="star"
      class="relative"
      :style="{ width: `${starSize}px`, height: `${starSize}px` }"
    >
      <!-- Gray background star -->
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

      <!-- Yellow foreground star with partial fill -->
      <div
        class="overflow-hidden absolute top-0 left-0 h-full text-yellow-400"
        :style="{ width: `${getStarFill(star)}%` }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-full h-full"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118l-3.36-2.443a1 1 0 00-1.176 0l-3.36 2.443c-.784.57-1.838-.197-1.539-1.118l1.285-3.951a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
