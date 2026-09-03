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

  const { listRef, scrollLeft, scrollRight } = useHorizontalScroll<HTMLOListElement>()

  return (
    <div className={styles.animeSlider}>
      <button aria-label="Previous anime" className={classNames(styles.arrow, styles.arrowLeft)} onClick={scrollLeft}>
        <Icon name="arrowRight" />
      </button>
      <ul ref={listRef} className={styles.list}>
        {items.map((animeItem) => (
          <li className={styles.item} key={animeItem.id}>
            <AnimeCard anime={animeItem} />
          </li>
        ))}
      </ul>
      <button aria-label="Next anime" className={classNames(styles.arrow, styles.arrowRight)} onClick={scrollRight}>
        <Icon name="arrowRight" />
      </button>
    </div>
  );
}
