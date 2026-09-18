import type { Anime } from '@/entities/anime/model/types';
import {AnimeCard} from '@/entities/anime/ui/AnimeCard';
import { Icon } from '@/shared/ui/Icon';
import classNames from "classnames";
import styles from './AnimeSlider.module.scss';
import {useHorizontalScroll} from "@/shared/lib/useHorizontalScroll";


type AnimeSliderProps = {
  items: Anime[];
}

export const AnimeSlider = ({ items }: AnimeSliderProps) => {

  const { listRef, scrollLeft, scrollRight, canScrollLeft, canScrollRight } = useHorizontalScroll<HTMLOListElement>(items.length)

  return (
    <div className={styles.animeSlider}>
      <button
        type="button"
        aria-label="Previous anime"
        className={classNames(styles.arrow, styles.arrowLeft)}
        onClick={scrollLeft}
        disabled={!canScrollLeft}
      >
        <Icon name="arrowLeft" />
      </button>
      <ul ref={listRef} className={styles.list}>
        {items.map((animeItem) => (
          <li className={styles.item} key={animeItem.id}>
            <AnimeCard anime={animeItem} />
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label="Next anime"
        className={classNames(styles.arrow, styles.arrowRight)}
        onClick={scrollRight}
        disabled={!canScrollRight}
      >
        <Icon name="arrowRight" />
      </button>
    </div>
  );
}
