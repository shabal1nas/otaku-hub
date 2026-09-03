import {Button, ButtonLink} from '@/shared/ui/button';
import classNames from 'classnames';
import { Rating } from '@/entities/anime/ui/Rating';
import { Genres } from '@/entities/anime/ui/Genres';
import { useState } from 'react';
import type { Anime } from '@/entities/anime/model/types';
import { AnimeInfoDetails } from "@/entities/anime/ui/AnimeInfoDetails";
import { getAnimeDetailsRoute } from '@/app/providers/router/routes';
import styles from './HeroBanner.module.scss';


type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeroBannerProps = {
  anime: Anime;
  titleId?: string;
  TitleTag?: HeadingTag;
}

export const HeroBanner = (props: HeroBannerProps) => {
  const {
    anime,
    titleId,
    TitleTag = 'h1',
  } = props

  const animeGenres = anime.genres
  const resolvedId = titleId ?? `hero-title-${anime.id}`
  const heroImageSrc = anime.banner ?? anime.poster;

  const [isInfoOpen, setIsInfoOpen] = useState(false)

  return (
    <>
      <div className={styles.heroBanner}>
        <img className={styles.image} src={heroImageSrc} alt={`${anime.title} banner`} />
        <div className={styles.inner}>
          <div className={styles.body}>
            <div className={styles.header}>
              <Rating
                className="hidden-mobile"
                rating={anime.rating}
                showMaxRating preset="hero"/>
              <Genres
                className={styles.genres}
                genres={animeGenres} />
            </div>
            <TitleTag
              className={styles.title}
              id={resolvedId}
            >
              {anime.title}
            </TitleTag>
            <div className={classNames(styles.description, 'hidden-mobile')}>
              <p>{anime.description}</p>
            </div>
            <div className={styles.actions}>
              <div className={styles.actionButton}>
                <Button
                  className={styles.actionControl}
                  type="button"
                  icon="plus"
                  isIconOnly
                  ariaLabel="Add to my list"
                  variant="outlined"
                />
                <span className={styles.actionLabel}>My list</span>
              </div>
              <ButtonLink
                to={getAnimeDetailsRoute(anime.id)}
                className={styles.actionControl}
                icon="play"
                label="Play"
                ariaLabel="Move to Anime page"
                variant="filled"
              />
              <div className={styles.actionButton}>
                <Button
                  className={styles.actionControl}
                  type="button"
                  icon="info"
                  isIconOnly
                  ariaLabel="Show anime info"
                  variant="outlined"
                  onClick={() => setIsInfoOpen((prev) => !prev)}
                  aria-expanded={isInfoOpen}
                  aria-controls={`anime-info-${anime.id}`}
                />
                <div
                  id={`anime-info-${anime.id}`}
                  className={classNames(styles.popover,{
                    [styles.popoverOpen] : isInfoOpen,
                  })}>
                  <AnimeInfoDetails
                    titleId={resolvedId}
                    heroAnime={anime} />
                </div>
                <span className={styles.actionLabel}>Info</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(styles.infoPanel, {
        [styles.infoPanelOpen]: isInfoOpen,
      })}>
        <div
          id={`anime-info-mobile-${anime.id}`}
          className={styles.infoPanelInner}>
          <AnimeInfoDetails titleId={resolvedId} heroAnime={anime} />
        </div>
      </div>
    </>
  )
}
