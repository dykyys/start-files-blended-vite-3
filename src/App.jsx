//import Heading from './components/Heading/Heading';

import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header/Header';

const Pages = {
  Home: lazy(() => import('./pages/Home')),
  SearchCountry: lazy(() => import('./pages/SearchCountry')),
  Country: lazy(() => import('./pages/Country')),
};

export const App = () => {
  return (
    <>
    <Header/>
     <Suspense>
        <Routes>
          <Route path="/" element={<Pages.Home/>} />
          <Route path="/country" element={<Pages.SearchCountry/>} />
          <Route path="/country/:countryId" element={<Pages.Country/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
     </Suspense>
    </>
  );
};
