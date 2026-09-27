import { AnimeSlider } from '@/widgets/anime-section/AnimeSlider/AnimeSlider';
import { ButtonLink } from '@/shared/ui/button/ButtonLink';
import classNames from 'classnames';
import { Anime } from '@/entities/anime/model/types';
import styles from './AnimeSection.module.scss';
import { AsyncDataState } from "@/shared/ui/AsyncDataState/AsyncDataState";


export type AnimeSectionProps = {
  title: string;
  items: Anime[];
  seeAllPath?: string;
  isPending?: boolean;
  isError?: boolean;
  onRetry?: () => void;
}

export const AnimeSection = ({
  title,
  items,
  isPending = false,
  isError = false,
  onRetry,
  seeAllPath = '/browse',
}:AnimeSectionProps) => {

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
        <div className={items.length === 0 ? styles.state : undefined}>
          <AsyncDataState
            isPending={isPending}
            isError={isError}
            isEmpty={items.length === 0}
            onRetry={onRetry}
          >
            <AnimeSlider items={items} />
          </AsyncDataState>
        </div>
      </section>
    )
}
