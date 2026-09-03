import type { Anime } from './types'

import attackOnTitanPoster from '@/shared/assets/images/posters/attack-on-titan-poster.jpeg'
import attackOnTitanBanner from '@/shared/assets/images/banners/attack-on-titan-banner.jpg'
import jujutsuKaisenPoster from '@/shared/assets/images/posters/jujutsu-kaisen-poster.jpeg'
import apothecaryDiariesPoster from '@/shared/assets/images/posters/the-apothecary-diaries-poster.jpeg'
import onePiecePoster from '@/shared/assets/images/posters/one-piece-poster.jpeg'
import fullmetalAlchemistPoster from '@/shared/assets/images/posters/fullmetal-alchemist-poster.jpeg'
import deathNotePoster from '@/shared/assets/images/posters/death-note-poster.jpeg'
import demonSlayerPoster from '@/shared/assets/images/posters/demon-slayer-poster.jpeg'
import dandadanPoster from '@/shared/assets/images/posters/dandadan-poster.jpeg'
import bleachPoster from '@/shared/assets/images/posters/bleach-poster.jpeg'
import hunterXHunterPoster from '@/shared/assets/images/posters/hunter-x-hunter-poster.jpeg'
import onePunchManPoster from '@/shared/assets/images/posters/one-punch-man.jpeg'
import yourLieInAprilPoster from '@/shared/assets/images/posters/your-lie-in-april-poster.jpeg'
import violetEvergardenPoster from '@/shared/assets/images/posters/violet-evergarden-poster.jpeg'
import horimiyaPoster from '@/shared/assets/images/posters/horimiya-poster.jpeg'

export const animeList: Anime[] = [
  {
    id: 'aot',
    title: 'Attack on Titan',
    description:
      'When Titans breach the walls of humanity\'s last refuge, Eren Yeager vows to exterminate every last one of them. The truth behind the walls will shatter everything he believed.',
    rating: 9.0,
    genres: ['Action', 'Drama', 'Adventure', 'Thriller'],
    poster: attackOnTitanPoster,
    banner: attackOnTitanBanner,

    years: '2013–2023',
    seasons: 4,
    episodes: 94,
    movies: 2,
    studio: 'MAPPA',
    status: 'finished',
  },

  {
    id: 'jjk',
    title: 'Jujutsu Kaisen',
    description:
      'Yuji Itadori becomes the host of a powerful curse and joins a secret organization of jujutsu sorcerers to eliminate dangerous spirits threatening humanity.',
    rating: 8.7,
    genres: ['Action', 'Supernatural', 'Dark Fantasy'],
    poster: jujutsuKaisenPoster,

    years: '2020–present',
    seasons: 2,
    episodes: 47,
    movies: 1,
    studio: 'MAPPA',
    status: 'ongoing',
  },

  {
    id: 'apd',
    title: 'The Apothecary Diaries',
    description:
      'Maomao, a clever and observant girl with a background in medicine, is taken to the imperial palace where she begins solving mysterious illnesses and court intrigues, uncovering secrets hidden within the inner chambers.',
    rating: 8.8,
    genres: ['Drama', 'Mystery', 'Historical'],
    poster: apothecaryDiariesPoster,

    years: '2023–present',
    seasons: 2,
    episodes: 48,
    movies: 0,
    studio: 'TOHO Animation',
    status: 'ongoing',
  },

  {
    id: 'op',
    title: 'One Piece',
    description:
      'Monkey D. Luffy sets out on a grand adventure to become the Pirate King, gathering a crew and searching for the legendary treasure known as One Piece.',
    rating: 8.8,
    genres: ['Adventure', 'Action', 'Comedy'],
    poster: onePiecePoster,

    years: '1999–present',
    seasons: 21,
    episodes: 1100,
    movies: 15,
    studio: 'Toei Animation',
    status: 'ongoing',
  },

  {
    id: 'fma',
    title: 'Fullmetal Alchemist: Brotherhood',
    description:
      'Two brothers use alchemy in their quest to restore their bodies after a failed experiment, uncovering dark conspiracies along the way.',
    rating: 9.1,
    genres: ['Action', 'Adventure', 'Fantasy', 'Drama'],
    poster: fullmetalAlchemistPoster,

    years: '2009–2010',
    seasons: 1,
    episodes: 64,
    movies: 1,
    studio: 'Bones',
    status: 'finished',
  },

  {
    id: 'dn',
    title: 'Death Note',
    description:
      'A high school student gains the power to kill anyone whose name he writes in a mysterious notebook, leading to a deadly game of cat and mouse.',
    rating: 9.0,
    genres: ['Thriller', 'Psychological', 'Supernatural'],
    poster: deathNotePoster,

    years: '2006–2007',
    seasons: 1,
    episodes: 37,
    movies: 3,
    studio: 'Madhouse',
    status: 'finished',
  },

  {
    id: 'ds',
    title: 'Demon Slayer',
    description:
      'Tanjiro Kamado becomes a demon slayer after his family is slaughtered, seeking revenge and a cure for his sister who has turned into a demon.',
    rating: 8.7,
    genres: ['Action', 'Fantasy', 'Adventure'],
    poster: demonSlayerPoster,

    years: '2019–present',
    seasons: 4,
    episodes: 63,
    movies: 1,
    studio: 'ufotable',
    status: 'ongoing',
  },

  {
    id: 'dd',
    title: 'Dandadan',
    description:
      'Two teenagers with conflicting beliefs about the supernatural encounter aliens and spirits, leading to chaotic and bizarre adventures.',
    rating: 8.5,
    genres: ['Action', 'Supernatural', 'Comedy'],
    poster: dandadanPoster,

    years: '2024–present',
    seasons: 1,
    episodes: 12,
    movies: 0,
    studio: 'Science SARU',
    status: 'ongoing',
  },

  {
    id: 'bl-tybw',
    title: 'Bleach: Thousand-Year Blood War',
    description:
      'As a new enemy emerges, Ichigo Kurosaki and the Soul Reapers face the Quincy in a devastating war that threatens the balance between worlds and reveals long-hidden truths.',
    rating: 9.0,
    genres: ['Action', 'Supernatural', 'Adventure'],
    poster: bleachPoster,

    years: '2022–present',
    seasons: 1,
    episodes: 40,
    movies: 0,
    studio: 'Pierrot',
    status: 'ongoing',
  },

  {
    id: 'hxh',
    title: 'Hunter x Hunter',
    description:
      'Gon Freecss sets out to become a Hunter and find his father, encountering powerful allies and dangerous enemies along the journey.',
    rating: 9.0,
    genres: ['Adventure', 'Fantasy', 'Action'],
    poster: hunterXHunterPoster,

    years: '2011–2014',
    seasons: 6,
    episodes: 148,
    movies: 2,
    studio: 'Madhouse',
    status: 'finished',
  },

  {
    id: 'opm',
    title: 'One Punch Man',
    description:
      'Saitama, a hero who can defeat any opponent with a single punch, struggles with boredom and a lack of challenge as he searches for a worthy adversary in a world full of powerful monsters and heroes.',
    rating: 8.7,
    genres: ['Action', 'Comedy', 'Superhero'],
    poster: onePunchManPoster,

    years: '2015–present',
    seasons: 2,
    episodes: 24,
    movies: 0,
    studio: 'J.C.Staff',
    status: 'ongoing',
  },

  {
    id: 'ylia',
    title: 'Your Lie in April',
    description:
      'A piano prodigy who lost his ability to hear music meets a free-spirited violinist who helps him rediscover his passion and confront his past.',
    rating: 8.7,
    genres: ['Romance', 'Drama', 'Music'],
    poster: yourLieInAprilPoster,

    years: '2014–2015',
    seasons: 1,
    episodes: 22,
    movies: 0,
    studio: 'A-1 Pictures',
    status: 'finished',
  },

  {
    id: 've',
    title: 'Violet Evergarden',
    description:
      'A former soldier learns to understand human emotions while working as a letter writer, helping others express their feelings and searching for the meaning of love.',
    rating: 8.9,
    genres: ['Drama', 'Romance', 'Slice of Life'],
    poster: violetEvergardenPoster,

    years: '2018–2020',
    seasons: 1,
    episodes: 13,
    movies: 2,
    studio: 'Kyoto Animation',
    status: 'finished',
  },

  {
    id: 'hori',
    title: 'Horimiya',
    description:
      'Two high school students with contrasting personalities discover each other’s hidden sides and develop a sincere and heartwarming relationship.',
    rating: 8.5,
    genres: ['Romance', 'Slice of Life', 'Drama'],
    poster: horimiyaPoster,

    years: '2021–2023',
    seasons: 2,
    episodes: 26,
    movies: 0,
    studio: 'CloverWorks',
    status: 'finished',
  },
]