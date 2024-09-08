import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';
import {
  Container,
  CountryList,
  Loader,
  SearchForm,
  Section,
} from 'components';

export const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const region = searchParams.get('region') ?? '';

  useEffect(() => {
    if (!region) return;
    async function wrapper() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchByRegion(region);
        setCountries(response);
        console.log(response);
        setLoading(false);
      } catch (error) {
        setError('Oops!' + error.message);
      } finally {
        setLoading(false);
      }
    }
    wrapper();
  }, [region]);

  const handleSearch = region => {
    searchParams.set('region', region);
    setSearchParams(searchParams);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSearch} />
        <CountryList list={countries} />
        {loading && <Loader />}
        {error && <p>{error}</p>}
      </Container>
    </Section>
  );
};
