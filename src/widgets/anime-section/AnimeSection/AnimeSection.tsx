import { AnimeSlider } from '@/widgets/anime-section/AnimeSlider/AnimeSlider';
import { ButtonLink } from '@/shared/ui/button/ButtonLink';
import classNames from 'classnames';
import { Anime } from '@/entities/anime/model/types';
import styles from './AnimeSection.module.scss';
import { PageState } from "@/shared/ui/PageState";
import { Button } from "@/shared/ui/button";


type AnimeSectionProps = {
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
  seeAllPath = '/browse',
  isPending = false,
  isError = false,
  onRetry,
}:AnimeSectionProps) => {

  const renderContent = () => {
    if (isPending) {
      return <PageState variant="loading" size="compact" />;
    }

    if (isError && items.length === 0) {
      return (
        <PageState
          variant="error"
          size="compact"
          action={
            onRetry
              ? <Button label="Try again" onClick={onRetry}/>
              : null
          }
       />
      )
    }

    if (items.length === 0) {
      return <PageState variant="empty" size="compact" />
    }
    return <AnimeSlider items={items} />
  }

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
          {renderContent()}
        </div>
      </section>
    )
}
