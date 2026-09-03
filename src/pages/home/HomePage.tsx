import { SidebarNav } from '@/widgets/navigation/sidebar-navigation/ui/SidebarNav';
import { MainContent } from '@/widgets/main-content/MainContent';
import { RightPanel } from '@/widgets/right-panel/RightPanel';
import { MobileNav } from '@/widgets/navigation/mobile-navigation';
import {
  getActionAdventureAnime, getDramaRomanceAnime,
  getHeroAnime, getPopularAnime,
  getTopRankedAnime
} from '@/entities/anime/lib/selectors';
import { animeList } from "@/entities/anime/model/mock";
import styles from './HomePage.module.scss';
import {PageState} from "@/shared/ui/PageState";
import {Button} from "@/shared/ui/button";


export const HomePage = () => {

  const topRankedAnime = getTopRankedAnime(animeList);
  const heroAnime = getHeroAnime(animeList);
  const popularAnime = getPopularAnime(animeList)
  const actionAdventure = getActionAdventureAnime(animeList);
  const dramaRomance = getDramaRomanceAnime(animeList)

  const isLoading = false
  const error = null

  if (isLoading) {
    return <PageState variant="loading" />;
  }

  if (error) {
    return (
      <PageState
        variant="error"
        action={
          <Button
            label="Reload page"
            onClick={() => window.location.reload()}
          />
        }
      />
    );
  }


  return (
    <>
      <div className={styles.homeLayout}>
        <div className={styles.sidebarNavWrap}>
          <SidebarNav />
        </div>
        <div className={styles.mainWrap}>
          <MainContent
            topRankedAnime={topRankedAnime}
            heroAnime={heroAnime}
            popularAnime={popularAnime}
            actionAdventure={actionAdventure}
            dramaRomance={dramaRomance}
          />
        </div>
        <div className={styles.rightPanelWrap}>
          <RightPanel topRankedAnime={topRankedAnime} />
        </div>
      </div>
      <div className={styles.mobileNavWrap}>
        <MobileNav />
      </div>
    </>
  )
}
