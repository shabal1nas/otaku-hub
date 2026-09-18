import HomeIcon from '@/shared/assets/icons/home.svg?react';
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import BrowseIcon from '@/shared/assets/icons/browse.svg?react';
import BookmarkIcon from '@/shared/assets/icons/bookmark.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import PrimeIcon from '@/shared/assets/icons/star-fill-2.svg?react';
import SignOutIcon from '@/shared/assets/icons/sign-out.svg?react';
import InfoCircle from '@/shared/assets/icons/info-circle.svg?react';
import Play from '@/shared/assets/icons/play.svg?react';
import Plus from '@/shared/assets/icons/plus.svg?react';
import Star from '@/shared/assets/icons/star-filled.svg?react';
import ArrowRight from '@/shared/assets/icons/arrow-right-no-stick.svg?react';
import ArrowZigZag from '@/shared/assets/icons/arrow-zigzag.svg?react';

import type { ComponentType, SVGProps } from 'react'

export type IconType = ComponentType<SVGProps<SVGSVGElement>>

export const iconMap = {
  home: HomeIcon,
  search: SearchIcon,
  browse: BrowseIcon,
  myList: BookmarkIcon,
  profile: ProfileIcon,
  prime: PrimeIcon,
  signOut: SignOutIcon,
  info: InfoCircle,
  play: Play,
  plus: Plus,
  star: Star,
  arrowLeft: ArrowRight,
  arrowRight: ArrowRight,
  arrowZigZag: ArrowZigZag,
} satisfies Record<string, IconType>

export type IconName = keyof typeof iconMap
