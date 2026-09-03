import { mapAnimeDtoToAnime } from "@/entities/anime/model/mappers";
import type {
  AnimeListResponseDto,
  AnimeListVariablesDto,
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
}
type AnimeByGenreParams = AnimeListParams & {
   genre: string,
}
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
  perPage = 12
}: AnimeListParams = {}):Promise<Anime[]> => {
  return getAnimeList({
    page,
    perPage,
    sort:['SCORE_DESC']
  });
};

export const getAnimeByGenre = ({
  genre,
  page = 1,
  perPage = 12,
}:AnimeByGenreParams):Promise<Anime[]> => {
  return getAnimeList({
    page,
    perPage,
    sort:['POPULARITY_DESC'],
    genre
  });
};