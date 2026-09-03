import { AnimeSlider } from '@/widgets/anime-section/AnimeSlider/AnimeSlider';
import { ButtonLink } from '@/shared/ui/button/ButtonLink';
import classNames from 'classnames';
import { Anime } from '@/entities/anime/model/types';
import styles from './AnimeSection.module.scss';


type AnimeSectionProps = {
  title: string;
  items: Anime[];
  seeAllPath?: string;
}

export const AnimeSection = ({ title, items, seeAllPath = '/browse' } :AnimeSectionProps) => {
  return (
      <section className={styles.animeSection}>
        <div className={styles.header}>
          <h2 className={classNames(styles.title, 'h4')}>{title}</h2>
          <ButtonLink
            to={seeAllPath}
            label="See all"
            variant="ghosted"
            icon="arrowRight"
            iconPosition="after"
          />
        </div>
        <AnimeSlider items={items} />
      </section>
    )
}
