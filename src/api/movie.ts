/* eslint-disable no-useless-catch */
import type { IMovieResponse } from '../types/movie'
import axiosInstance from '../utils/axios'


export const apiGetAllMovies = async (): Promise<IMovieResponse[]> => {
  const { data } = await axiosInstance.get('?action=info&id=2501')
  return data
}

