import classNames from 'classnames';
import styles from './Genres.module.scss';

type GenresProps = {
  className?: string;
  genres: string[];
  limit?: number;
  separator?: string;
}

export const Genres = ({ className, genres, limit, separator }: GenresProps) => {

  const visibleGenres = limit
    ? genres.slice(0, limit)
    : genres;

  if (separator) {
    return (
      <div className={classNames(styles.genres, className)}>
        {visibleGenres.join(separator)}
      </div>
    )
  }
  return (
    <div className={classNames(styles.genres, className)}>
      {visibleGenres.map((genre) => (
        <span className={styles.genre} key={genre}>{genre}</span>
      ))}
    </div>
  )
}
