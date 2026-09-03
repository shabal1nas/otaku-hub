//Описание формы данных AniList
export type AniListAnimeStatusDto =
  | 'FINISHED'
  | 'RELEASING'
  | 'NOT_YET_RELEASED'
  | 'CANCELLED'
  | 'HIATUS';

export type AnimeStudioDto = {
  name: string;
}

export type AnimeDto = {
  id: number;
  title: {
    english: string | null;
    romaji: string | null;
  };
  description: string | null;
  averageScore: number | null;
  genres: string[];
  coverImage: {
    large: string | null;
  };
  bannerImage: string | null;
  episodes: number | null;
  status: AniListAnimeStatusDto | null;
  startDate: {
    year: number | null;
  };
  endDate: {
    year: number | null;
  };
  studios: {
    nodes: AnimeStudioDto[];
  };
};

export type AnimeListResponseDto = {
  Page: {
    media: AnimeDto[];
  };
};

export type AnimeSortDto =
  | 'POPULARITY_DESC'
  | 'SCORE_DESC'
  | 'TRENDING_DESC';


export type AnimeListVariablesDto = {
  page: number;
  perPage: number;
  sort: AnimeSortDto[];
  genre?: string;
}