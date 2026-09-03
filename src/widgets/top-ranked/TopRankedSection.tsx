import classNames from "classnames";
import { Anime } from "@/entities/anime/model/types";
import {getAnimeDetailsRoute} from "@/app/providers/router/routes";
import { Link } from "react-router";
import { Genres } from '@/entities/anime/ui/Genres';
import { Rating } from '@/entities/anime/ui/Rating';
import styles from './TopRankedSection.module.scss';
import { useHorizontalScroll } from "@/shared/lib/useHorizontalScroll";


type TopRankedProps = {
  variant: 'sidebar' | 'inline';
  items: Anime[];
}

const getRankTone = (index: number) => {
  if (index === 0) return 'gold';
  if (index === 1) return 'violet';
  if (index === 2) return 'pink';
  return 'default';
}


export const TopRankedSection = ({ variant, items } : TopRankedProps) => {
  const isInline = variant === 'inline'
  const isSidebar = variant === 'sidebar'

  const topRanked = isSidebar
    ? items.slice(0, 8)
    : items.slice(0, 5);

  const { listRef } = useHorizontalScroll<HTMLOListElement>()

  return (
    <section className={classNames(styles.root, {
      [styles.rootInline] : isInline
    })}>
      <ol
        ref={isInline ? listRef : null}
        className={classNames(styles.rankedList, {
          [styles.rankedListInline] : isInline,
          [styles.rankedListSidebar] : isSidebar,
        })}
      >
        {topRanked.map((anime, index) => (
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
                  <span className={styles.animeTitle}>{anime.title}</span>
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
    </section>
  )
}
