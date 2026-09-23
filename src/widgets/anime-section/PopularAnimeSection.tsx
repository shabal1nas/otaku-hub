import { useQuery } from "@tanstack/react-query";
import { getPopularAnime } from "@/entities/anime/api/animeAPI";
import { AnimeSection } from "@/widgets/anime-section/AnimeSection/AnimeSection";

const PAGE = 1;
const PER_PAGE = 12;

export const PopularAnimeSection = () => {
  const {
    data: popularAnime = [],
    isPending,
    isError,
    refetch
  } = useQuery({
    queryKey: ['anime', 'popular', { page: PAGE, perPage: PER_PAGE }],
    queryFn: () => getPopularAnime({ page: PAGE, perPage: PER_PAGE }),
  });

  return (
    <AnimeSection
      title="Popular Anime"
      items={popularAnime}
      isPending={isPending}
      isError={isError}
      onRetry={() => void refetch()}
    />
  )
}