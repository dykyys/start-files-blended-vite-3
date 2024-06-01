import { Header } from 'components';
import { Country } from 'pages/Country';
import { Home } from 'pages/Home';
import { SearchCountry } from 'pages/SearchCountry';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/country'} element={<SearchCountry />} />
        <Route path={'/country/:countryId'} element={<Country />} />
        <Route path={'*'} element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
};
