import type { AnimeDto } from "@/entities/anime/api/typesAPI";
import type {Anime, AnimeStatus} from "@/entities/anime/model/types";


const mapAnimeYears = (dto: AnimeDto): string => {
  const startYear = dto.startDate.year
  const endYear = dto.endDate.year
  const isOngoing = dto.status === 'RELEASING'

  if (!startYear) {
    return 'Unknown'
  }
  if (isOngoing || !endYear) {
    return `${startYear}-now`
  }
  if (startYear === endYear) {
    return String(startYear)
  }
  return `${startYear}-${endYear}`
}

const mapRating = (score: number | null): number => {
  if (score === null) return 0;

  const rating = score / 10;

  return Math.min(Math.max(rating, 0),10)
}

const mapStatus = (status: AnimeDto['status']): AnimeStatus => {
  if (status === 'RELEASING' || status === 'HIATUS' || status === 'NOT_YET_RELEASED') return 'ongoing';
  if (status === 'CANCELLED') return 'cancel';
  return 'finished'
}

export const mapAnimeDtoToAnime = (dto: AnimeDto): Anime => ({
  id: String(dto.id),
  title: dto.title.english ?? dto.title.romaji ?? 'Untitled',
  description: dto.description ?? '',
  rating: mapRating(dto.averageScore),
  genres: dto.genres,
  poster: dto.coverImage.large ?? '',
  banner: dto.bannerImage ?? undefined,
  years: mapAnimeYears(dto),
  seasons: null,
  episodes: dto.episodes ?? 0,
  movies: null,
  studio: dto.studios.nodes[0]?.name ?? 'Unknown studios',
  status: mapStatus(dto.status),
});