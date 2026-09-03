# Otaku Hub

Frontend MVP аниме-платформы для поиска, просмотра и дальнейшей работы с каталогом через Anime API.

## Stack

- React 19
- TypeScript
- Vite
- React Router v7
- SCSS Modules
- Zustand
- Axios

## Project Status

Сейчас проект находится на стадии UI-first MVP:

- основная домашняя страница уже сверстана
- данные пока берутся из локальных mock'ов
- роутинг и API-слой ещё не доведены до production-ready состояния
- следующая большая задача: подготовить data flow под подключение Anime API

## Run

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - локальный dev server
- `npm run build` - production build
- `npm run lint` - ESLint check

## Architecture

Проект организован по FSD-структуре:

- `src/app` - app entry, провайдеры, роутинг, глобальные стили
- `src/pages` - страницы
- `src/widgets` - крупные блоки страницы
- `src/features` - пользовательские сценарии и действия
- `src/entities` - доменные сущности
- `src/shared` - переиспользуемый UI, утилиты, assets

## Current UI Scope

Реализовано:

- sidebar navigation
- hero banner
- anime sections
- top ranked section
- right panel
- mobile navigation

Пока не реализовано полноценно:

- search page
- browse page
- anime details page
- my list
- API integration
- async states

## Data Strategy

Сейчас UI использует локальные mock-данные из `entities/anime/model/mock.ts`.

Планируемый production-like подход:

- API responses не использовать напрямую в UI
- добавить `DTO -> mapper -> domain/view model`
- вынести запросы в централизованный API layer
- добавить loading, error и empty states на уровне page/container

## Quality Goals

- понятный и читаемый код
- аккуратная FSD-структура без переусложнения
- адаптивная верстка
- доступные интерактивные элементы
- подготовка к безопасному подключению реального API

## Docs

- [PROJECT_CONTEXT.md](/Users/alexandra/frontend/otaku-hub/PROJECT_CONTEXT.md)
- [FRONTEND_STANDARDS.md](/Users/alexandra/frontend/otaku-hub/FRONTEND_STANDARDS.md)
- [CODEX.md](/Users/alexandra/frontend/otaku-hub/CODEX.md)
