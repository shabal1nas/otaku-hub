export const ROUTES = {
  home: '/',
  search: '/search',
  myList: '/my-list',
  browse: '/browse',
  profile: '/profile',
  animeDetails: '/anime/:id',
} as const

export const getAnimeDetailsRoute = (id: string) => `/anime/${id}`
