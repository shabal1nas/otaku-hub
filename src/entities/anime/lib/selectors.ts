import type { Anime } from "@/entities/anime/model/types";

export const getHeroAnime = (items: Anime[]) => items[0] ?? null;
