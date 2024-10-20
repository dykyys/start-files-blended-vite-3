import {
  Container,
  Heading,
  Section,
  SearchForm,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchByRegion(region);

        setCountries(response);
      } catch (error) {
        setError(error.massage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  function onSubmit(region) {
    setSearchParams({ region });
  }

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {error && <Heading title={error} bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
