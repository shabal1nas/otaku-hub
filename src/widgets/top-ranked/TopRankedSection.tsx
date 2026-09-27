import classNames from "classnames";
import { getAnimeDetailsRoute } from "@/app/providers/router/routes";
import { Link } from "react-router";
import { Genres } from '@/entities/anime/ui/Genres';
import { Rating } from '@/entities/anime/ui/Rating';
import styles from './TopRankedSection.module.scss';
import { useQuery } from "@tanstack/react-query";
import { getCurrentAnimeSeason } from "@/entities/anime/lib/getCurrentAnimeSeason";
import { getTopRankedAnime } from "@/entities/anime/api/animeAPI";
import { AsyncDataState } from "@/shared/ui/AsyncDataState/AsyncDataState";


type TopRankedProps = {
  variant: 'sidebar' | 'inline';
}

const getRankTone = (index: number) => {
  if (index === 0) return 'gold';
  if (index === 1) return 'violet';
  if (index === 2) return 'pink';
  return 'default';
}

const PAGE = 1;
const PER_PAGE = 8;

export const TopRankedSection = ({ variant } : TopRankedProps) => {
  const isInline = variant === 'inline'
  const isSidebar = variant === 'sidebar'

  const { season, seasonYear } = getCurrentAnimeSeason();

  const {
    data: topRankedAnime = [],
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['anime', 'top-ranked',
      {
        page: PAGE,
        perPage: PER_PAGE,
        season,
        seasonYear
      },
    ],
    queryFn: () => getTopRankedAnime({
      page: PAGE,
      perPage: PER_PAGE,
      season,
      seasonYear
    }),
  });
  const visibleTopRankedAnime = isInline ? topRankedAnime.slice(0,5) : topRankedAnime;

  return (
    <section className={classNames(styles.root, {
      [styles.rootInline] : isInline
    })}>
      <AsyncDataState
        isPending={isPending}
        isError={isError}
        isEmpty={topRankedAnime.length === 0}
        onRetry={() => refetch()}
      >
        <ol
          className={classNames(styles.rankedList, {
            [styles.rankedListInline] : isInline,
            [styles.rankedListSidebar] : isSidebar,
          })}
        >
          {visibleTopRankedAnime.map((anime, index) => (
            <li
              key={anime.id}
              className={classNames(styles.rankedItem, {
                [styles.rankedItemInline] : isInline
              })}
            >
              <Link className={styles.rankedLink} to={getAnimeDetailsRoute(anime.id)}>
                <span className={classNames(styles.rankedNumber, styles[getRankTone(index)])}>
                {String(index + 1).padStart(2, '0')}
              </span>
                <img
                  className={styles.poster}
                  src={anime.poster}
                  alt={anime.title}
                />
                <div className={styles.mainInfo}>
                  <div className={styles.textInfo}>
                  <span
                    className={styles.animeTitle}
                    title={anime.title}
                  >
                    {anime.title}</span>
                    <Genres
                      className={styles.genres}
                      limit={2}
                      genres={anime.genres}
                      separator=", " />
                  </div>
                  <Rating
                    className={styles.rating}
                    rating={anime.rating}
                    variant="progress"
                    withFrame={false}
                    preset="compact" />
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </AsyncDataState>
    </section>
  )
}
