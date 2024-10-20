import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);
  const onSubmit = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {loading && <Loader />}
        <CountryList countries={countries} />
        {error && (
          <Heading title="Something went wrong, try again later" bottom />
        )}
      </Container>
    </Section>
  );
};
