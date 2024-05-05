// import { Heading } from 'components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home } from 'pages/Home';
import { SearchCountry } from 'pages/SearchCountry';
import { Country } from 'pages/Country';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/country" element={<SearchCountry />} />
          <Route path="/country/:countryId" element={<Country />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
