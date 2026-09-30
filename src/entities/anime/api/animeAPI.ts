import { mapAnimeDtoToAnime } from "@/entities/anime/model/mappers";
import type {
  AnimeListResponseDto,
  AnimeListVariablesDto,
  AniListSeasonDto,
} from "@/entities/anime/api/typesAPI";
import type { Anime } from "@/entities/anime/model/types";
import { fetchAniList } from "@/shared/api/anilist";
import { ANIME_LIST_QUERY } from "@/entities/anime/api/animeQueries";

export const getAnimeList = async(
  variables: AnimeListVariablesDto
):Promise<Anime[]> => {
   const data = await fetchAniList<AnimeListResponseDto>(
     ANIME_LIST_QUERY,
     variables
  )

  return data.Page.media.map((dto) => mapAnimeDtoToAnime(dto))
}

type AnimeListParams = {
   page?: number,
   perPage?:number,
};

type AnimeByGenreParams = AnimeListParams & {
   genres: string[],
};

type TopRankedAnimeParams = AnimeListParams & {
  season: AniListSeasonDto;
  seasonYear: number;
};

export const getPopularAnime = ({
  page = 1,
  perPage = 12
}:AnimeListParams = {}):Promise<Anime[]> => {
   return getAnimeList({
     page,
     perPage,
     sort:['POPULARITY_DESC']
   });
 };

export const getTopRankedAnime = ({
  page = 1,
  perPage = 8,
  season,
  seasonYear
}:TopRankedAnimeParams):Promise<Anime[]> => {
  return getAnimeList({
    page,
    perPage,
    sort:['SCORE_DESC'],
    season,
    seasonYear,
  });
};

export const getAnimeByGenres = ({
  page = 1,
  perPage = 12,
  genres
}:AnimeByGenreParams):Promise<Anime[]> => {
  return getAnimeList({
    page,
    perPage,
    sort:['POPULARITY_DESC'],
    genres,
  });
};