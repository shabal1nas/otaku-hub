import { HeroBanner } from '@/widgets/hero';
import { AnimeSection, PopularAnimeSection } from "@/widgets/anime-section";
import styles from './MainContent.module.scss'
import { TopRankedSection } from "@/widgets/top-ranked";
import type { Anime } from "@/entities/anime/model/types";

type MainContentProps = {
  topRankedAnime: Anime[],
  heroAnime: Anime | null,
  actionAdventure: Anime[],
  dramaRomance: Anime[],
}

export const MainContent = ({
  topRankedAnime,
  heroAnime,
  actionAdventure,
  dramaRomance,
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
        <TopRankedSection variant="inline" items={topRankedAnime}/>
      </div>
      <PopularAnimeSection />
      <AnimeSection title="Action & Adventure" items={actionAdventure} />
      <AnimeSection title="Drama & Romance" items={dramaRomance} />
    </main>
  )
}
