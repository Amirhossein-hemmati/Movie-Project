// stores/contentStore.ts
import { defineStore } from 'pinia'

export const useOpenSurveyStore = defineStore('openSurvey', {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    openContent() {
      this.isOpen = true
    },
    closeContent() {
      this.isOpen = false
    },
  },
})
