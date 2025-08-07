<script setup lang="ts">
import { ref, onMounted } from "vue"

const props = defineProps<{
  editable?: boolean
  movieData: {
    user_rating: number
  }
  maxStars?: number
}>()

const emit = defineEmits<{
  (e: "update-rating", newAverage: number): void
}>()

const editable = props.editable ?? true
const maxStars = props.maxStars ?? 5

const userRating = ref<number | null>(null)
const hasRated = ref(false)
const averageRating = ref(props.movieData?.user_rating)
const voteCount = ref(1) // Default to 1 if missing

const storageKey = `movie-rated-${props.movieData?.id}`

onMounted(() => {
  const stored = localStorage.getItem(storageKey)
  if (stored) {
    userRating.value = Number(stored)
    hasRated.value = true
  }
})

function handleRate(star: number) {
  if (hasRated.value || !editable) return

  userRating.value = star
  hasRated.value = true
  localStorage.setItem(storageKey, String(star))

  // Recalculate average (naive, local only)
  const totalScore = averageRating.value * voteCount.value + star
  voteCount.value++
  averageRating.value = +(totalScore / voteCount.value).toFixed(2)

  emit("update-rating", averageRating.value)
}
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <!-- Stars -->
    <div class="flex gap-x-1">
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
          'cursor-default': !editable || hasRated,
        }"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118l-3.36-2.443a1 1 0 00-1.176 0l-3.36 2.443c-.784.57-1.838-.197-1.539-1.118l1.285-3.951a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z"
        />
      </svg>
    </div>

    <!-- Average Display -->
    <div class="text-sm text-gray-700">
      آرامی مردمی ({{ averageRating }})
    </div>

    <!-- Lock message -->
    <div v-if="hasRated" class="text-xs text-green-500">
      شما قبلاً امتیاز داده‌اید.
    </div>
  </div>
</template>
