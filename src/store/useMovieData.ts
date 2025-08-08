import { defineStore } from 'pinia';
import { IMovieResponse } from '@/types/movie';

export const useMovieData = defineStore('movieData', {
  state: () => ({
    movieData: null as IMovieResponse | null,
  }),

  getters: {
    getMovieData: (state) => state.movieData,
  },

  actions: {
    setMovieData(data: IMovieResponse) {
      this.movieData = data;
    },

    refetch() {
      
      
    },
  },
});
