/* eslint-disable no-useless-catch */
import type { IMovieResponse, ISendRate } from '../types/movie'
import axiosInstance from '../utils/axios'


export const apiGetAllMovies = async (): Promise<IMovieResponse[]> => {
  const { data } = await axiosInstance.get('?action=info&id=2501')
  return data
}

export const apipostSurveyUser = async (model: ISendRate): Promise<string> => {
  const { data } = await axiosInstance.post('?action=rate&id=2501', (model))
  return data
}
