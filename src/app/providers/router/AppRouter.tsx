import { Routes, Route } from 'react-router';
import { ROUTES } from './routes';
import { HomePage } from '@/pages/home/HomePage';
import { MyListPage } from "@/pages/my-list";
import { BrowsePage } from "@/pages/browse";
import { SearchPage } from "@/pages/search";
import { NotFoundPage } from "@/pages/not-found";
import { AnimeDetailsPage } from "@/pages/anime-details";
import { ProfilePage } from "@/pages/profile";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.search} element={<SearchPage />} />
      <Route path={ROUTES.myList} element={<MyListPage />} />
      <Route path={ROUTES.browse} element={<BrowsePage />} />
      <Route path={ROUTES.profile} element={<ProfilePage />} />
      <Route path={ROUTES.animeDetails} element={<AnimeDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
