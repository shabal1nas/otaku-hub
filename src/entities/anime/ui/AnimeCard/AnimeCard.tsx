import type { Anime } from "@/entities/anime/model/types";
import { Rating } from '@/entities/anime/ui/Rating';
import styles from './AnimeCard.module.scss'
import { Link } from "react-router";
import {getAnimeDetailsRoute} from "@/app/providers/router/routes";

type AnimeCardProps = {
  anime: Anime;
}

export const AnimeCard = ({ anime } : AnimeCardProps) => {
  return (
    <Link to={getAnimeDetailsRoute(anime.id)} className={styles.card}>
      <div className={styles.posterWrap}>
        <img
          className={styles.poster}
          src={anime.poster}
          alt={anime.title}
        />
        <Rating
          className={styles.rating}
          rating={anime.rating}
          preset="card"
        />
      </div>
      <span className={styles.title}>{anime.title}</span>
    </Link>
  )
}
