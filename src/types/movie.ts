export interface IEpisode {
  number: number;
  poster: string;
  title: string;
}


export interface IMovieResponse {
  episodes: IEpisode[];
  id: number;
  imdb: number;
  metacritic: number;
  poster: string;
  rotten: number;
  title_en: string;
  title_fa: string;
  user_rating: number;
  year: number;
}

export interface ISendRate {
  rate: number
}

export interface UserRating {
  id: number;
  rating: number;
}

