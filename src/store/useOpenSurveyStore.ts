import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOpenSurveyStore = defineStore('openSurvey', () => {
  const isOpen = ref(false)

  function openContent() {
    isOpen.value = true
  }

  function closeContent() {
    isOpen.value = false
  }

  return {
    isOpen,
    openContent,
    closeContent,
  }
})
