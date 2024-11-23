import { Header, Heading } from 'components';
import { Home } from 'pages/Home';
import { Country } from 'pages/Country';
import { SearchCountry } from 'pages/SearchCountry';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<SearchCountry />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
};
