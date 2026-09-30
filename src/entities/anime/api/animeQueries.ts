export const ANIME_LIST_QUERY = `
  query AnimeList(
    $page: Int,
    $perPage: Int,
    $sort: [MediaSort],
    $genres: [String],
    $season: MediaSeason,
    $seasonYear: Int,
  ) {
    Page(page: $page, perPage: $perPage) {
      media(
      type: ANIME,
      sort: $sort,
      genre_in: $genres,
      season: $season,
      seasonYear: $seasonYear
      ) {
        id
        title {
          english
          romaji
        }
        description
        averageScore
        genres
        coverImage {
          large
        }
        bannerImage
        episodes
        status
        startDate {
          year
        }
        endDate {
          year
        }
        studios(isMain: true) {
          nodes {
            name
          }
        }
      }
    }
  }
`;