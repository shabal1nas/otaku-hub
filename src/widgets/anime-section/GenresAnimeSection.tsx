import { useQuery } from "@tanstack/react-query";
import { getAnimeByGenres } from "@/entities/anime/api/animeAPI";
import {
  AnimeSection
} from "@/widgets/anime-section/AnimeSection/AnimeSection";

type GenresAnimeSection = {
  title: string;
  genres: string[];
}
const PAGE = 1;
const PER_PAGE = 12;

export const GenresAnimeSection = ({title, genres}: GenresAnimeSection) => {

  const {
    data: anime = [],
    isPending,
    isError,
    refetch
  } = useQuery({
    queryKey:[
      'anime',
      'by-genres',
      { page: PAGE, perPage: PER_PAGE, genres }
    ],
    queryFn: () => getAnimeByGenres(
      { page: PAGE, perPage: PER_PAGE, genres }
    )
  })

  return (
    <AnimeSection
      title={title}
      items={anime}
      isPending={isPending}
      isError={isError}
      onRetry={() => void refetch()}
    />
  )
}