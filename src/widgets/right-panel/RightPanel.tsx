import { Icon } from '@/shared/ui/Icon';
import classNames from "classnames";
import styles from './RightPanel.module.scss';
import { TopRankedSection } from "@/widgets/top-ranked";
import type { Anime } from "@/entities/anime/model/types";

type ScoreGuideTone = 'masterpiece' | 'excellent' | 'veryGood'

type ScoreGuideItem = {
  label: string;
  value: string;
  tone: ScoreGuideTone;
}
type RightPanelProps = {
  topRankedAnime: Anime[],
}

const scoreGuideItems: ScoreGuideItem[] = [
  {
    label: 'Masterpiece',
    value: '9.0+',
    tone: 'masterpiece',
  },
  {
    label: 'Excellent',
    value: '8.5–8.9',
    tone: 'excellent',
  },
  {
    label: 'Very Good',
    value: '8.0–8.4',
    tone: 'veryGood',
  },
];

export const RightPanel = ({ topRankedAnime } : RightPanelProps) => {

  return (
    <aside className={styles.rightPanel}>
      <div className={styles.header}>
        <div className={styles.titleWrap}>
          <Icon className={styles.icon} name="arrowZigZag"/>
          <h3 className={classNames(styles.title, 'h4')}>Top Ranked</h3>
        </div>
        <p className={styles.subtitle}>
          This Season
        </p>
      </div>
      <div className={styles.body}>
        <TopRankedSection variant="sidebar" items={topRankedAnime}/>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerWrap}>
          <h4 className={classNames(styles.footerTitle, 'h6')}>SCORE GUIDE</h4>
          <ul className={styles.list}>
            {scoreGuideItems.map((item) => (
              <li
                className={classNames(styles.item, styles[item.tone])}
                key={item.label}
              >
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
