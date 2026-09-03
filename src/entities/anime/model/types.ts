export type AnimeStatus = 'ongoing' | 'finished' | 'cancelled'

export type Anime = {
  id: string;
  title: string;
  description: string;
  rating: number;
  genres: string[];
  poster: string;
  banner?: string;
  years: string;
  seasons: number | null;
  episodes: number;
  movies: number | null;
  studio: string;
  status: AnimeStatus;
}