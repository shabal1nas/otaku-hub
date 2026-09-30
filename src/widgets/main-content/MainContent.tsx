import { HeroBanner } from '@/widgets/hero';
import { PopularAnimeSection, GenresAnimeSection } from "@/widgets/anime-section";
import styles from './MainContent.module.scss'
import { TopRankedSection } from "@/widgets/top-ranked";
import type { Anime } from "@/entities/anime/model/types";

type MainContentProps = {
  heroAnime: Anime | null,
}

const ACTION_ADVENTURE_GENRES = ['Action', 'Adventure'];
const DRAMA_ROMANCE_GENRES = ['Drama', 'Romance'];

export const MainContent = ({
  heroAnime,
}: MainContentProps) => {

  const titleId = "attack-on-titan-title"

  if (!heroAnime) {
    return <main className={styles.mainContent}>No anime found</main>;
  }

  return (
    <main className={styles.mainContent}>
      <HeroBanner
        anime={heroAnime}
        titleId={titleId}
      />
      <div className={styles.topRankedCompact}>
        <TopRankedSection variant="inline" />
      </div>
      <PopularAnimeSection />
      <GenresAnimeSection title="Action & Adventure" genres={ACTION_ADVENTURE_GENRES} />
      <GenresAnimeSection title="Drama & Romance" genres={DRAMA_ROMANCE_GENRES} />
    </main>
  )
}
