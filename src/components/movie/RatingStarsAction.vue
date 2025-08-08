<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  maxStars?: number
}>()

const emit = defineEmits<{
  (e: 'rating', value: number): void
}>()

const maxStars = props.maxStars ?? 5
const selectedRating = ref<number>(0)

function handleRate(star: number) {
  selectedRating.value = star
  emit('rating', star)
}

function isStarFilled(star: number) {
  return star <= selectedRating.value
}
</script>

<template>
  <div class="flex gap-1" style="direction: ltr">
    <div
      v-for="star in maxStars"
      :key="star"
      class="cursor-pointer"
      style="width: 28px; height: 28px"
      @click="handleRate(star)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        :class="isStarFilled(star) ? 'text-yellow-400' : 'text-gray-300'"
        class="w-full h-full transition-colors"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 
          0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 
          3.951c.3.921-.755 1.688-1.54 1.118l-3.36-2.443a1 1 0 
          00-1.176 0l-3.36 2.443c-.784.57-1.838-.197-1.539-1.118l1.285-3.951a1 1 0 
          00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 
          0 00.95-.69l1.286-3.95z"
        />
      </svg>
    </div>
  </div>
</template>

