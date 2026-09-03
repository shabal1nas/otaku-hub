import type { Anime } from "@/entities/anime/model/types";

export const getHeroAnime = (items: Anime[]) => items[0] ?? null

export const  getActionAdventureAnime = (items: Anime[]) =>
  items.filter(
    (animeItem) =>
      animeItem.genres.includes('Action') ||
      animeItem.genres.includes('Adventure')
  );


export const getDramaRomanceAnime = (items: Anime[]) =>
  items.filter(
    (animeItem) =>
      animeItem.genres.includes('Drama') ||
      animeItem.genres.includes('Romance')
  )

export const getTopRankedAnime = (items: Anime[]) =>
  [...items].sort((a, b) => b.rating - a.rating);

export const getPopularAnime = (items: Anime[]) => items;



