import { AniListSeasonDto } from "@/entities/anime/api/typesAPI";

type CurrentAnimeSeason = {
  season: AniListSeasonDto;
  seasonYear: number;
};

export const getCurrentAnimeSeason = (
  date = new Date(),
): CurrentAnimeSeason => {
  const month = date.getMonth();
  const year = date.getFullYear();

  if (month <= 2) {
    return {
      season: 'WINTER',
      seasonYear: year,
    };
  }
  if (month <= 5) {
    return {
      season: 'SPRING',
      seasonYear: year,
    };
  }
  if (month <= 8) {
    return {
      season: 'SUMMER',
      seasonYear: year,
    };
  }
  if (month <= 10) {
    return {
      season: 'FALL',
      seasonYear: year,
    };
  }

  return {
    season: 'WINTER',
    seasonYear: year + 1,
  }
}