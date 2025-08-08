// stores/contentStore.ts
import { defineStore } from 'pinia'

export const useOpenSurveyStore = defineStore('openSurvey', {
  state: () => ({
    isOpen: false,
    selectedMovieId: null as number | null,
  }),
  actions: {
    openContent(movieId: number) {
      this.selectedMovieId = movieId
      this.isOpen = true
    },
    closeContent() {
      this.isOpen = false
      this.selectedMovieId = null
    },
  },
})
