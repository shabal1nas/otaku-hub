import { SidebarNav } from '@/widgets/navigation/sidebar-navigation/ui/SidebarNav';
import { MainContent } from '@/widgets/main-content/MainContent';
import { RightPanel } from '@/widgets/right-panel/RightPanel';
import { MobileNav } from '@/widgets/navigation/mobile-navigation';
import { getHeroAnime } from '@/entities/anime/lib/selectors';
import { animeList } from "@/entities/anime/model/mock";
import styles from './HomePage.module.scss';



export const HomePage = () => {

  const heroAnime = getHeroAnime(animeList);

  return (
    <>
      <div className={styles.homeLayout}>
        <div className={styles.sidebarNavWrap}>
          <SidebarNav />
        </div>
        <div className={styles.mainWrap}>
          <MainContent
            heroAnime={heroAnime}
          />
        </div>
        <div className={styles.rightPanelWrap}>
          <RightPanel />
        </div>
      </div>
      <div className={styles.mobileNavWrap}>
        <MobileNav />
      </div>
    </>
  )
}
