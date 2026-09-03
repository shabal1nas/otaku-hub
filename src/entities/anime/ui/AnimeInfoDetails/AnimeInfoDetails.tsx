import styles from './AnimeInfoDetails.module.scss'
import { Anime } from "@/entities/anime/model/types";
import classNames from 'classnames';

type AnimeInfoDetails = {
  heroAnime: Anime;
  titleId?: string;
  className?: string;
}

export const  AnimeInfoDetails = ({ heroAnime, titleId, className }: AnimeInfoDetails) => {

  return (
    <div
      className={classNames(styles.infoPopover, className)}
      aria-labelledby={titleId}
    >
      <p className={styles.years}>{heroAnime.years}</p>
      <dl className={styles.infoList}>
        <div className={styles.infoRow}>
          <dt>Seasons:</dt>
          <dd className={styles.value}>{heroAnime.seasons ?? '—'}</dd>
        </div>
        <div className={styles.infoRow}>
          <dt>Episodes:</dt>
          <dd className={styles.value}>{heroAnime.episodes}</dd>
        </div>
        <div className={styles.infoRow}>
          <dt>Movies:</dt>
          <dd className={styles.value}>{heroAnime.movies ?? '—'}</dd>
        </div>
        <div className={styles.infoRow}>
          <dt>Studio:</dt>
          <dd className={styles.value}>{heroAnime.studio}</dd>
        </div>
        <div className={styles.infoRow}>
          <dt>Status:</dt>
          <dd className={classNames(styles.value, {
            [styles.ongoing]: heroAnime.status === 'ongoing',
            [styles.finished]: heroAnime.status === 'finished',
            [styles.cancelled]: heroAnime.status === 'cancelled',
          }
          )}
          >
            {heroAnime.status}
          </dd>
        </div>
      </dl>
    </div>
  )
}