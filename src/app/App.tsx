import { BrowserRouter } from 'react-router';
import { AppRouter } from '@/app/providers/router';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
