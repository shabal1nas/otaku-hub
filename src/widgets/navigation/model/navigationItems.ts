import type { IconName } from '@/shared/ui/Icon/iconConfig';

export type NavigationItem = {
  to: string;
  label: string;
  icon: IconName;
  tone?: 'default' | 'prime'
}

export type Navigation = NavigationItem[]


export const mainNavigation: Navigation = [
  { to: '/', icon: 'home', label: 'Home'},
  { to: '/search', icon: 'search', label: 'Search'},
  { to: '/browse', icon: 'browse', label: 'Browse'},
  { to: '/my-list', icon: 'myList',  label: 'My list'},
  { to: '/profile', icon: 'profile', label: 'Profile'},
]


export const secondaryNavigation: Navigation = [
  { to: '/prime', icon: 'prime', label: 'Prime', tone: 'prime'},
  { to: '/auth', icon: 'signOut', label: 'Sign Out'},
]

export const mobileNavigation = mainNavigation.filter(
  item => item.to !== '/browse'
)
