import { Container, CountryList, Loader, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [params] = useSearchParams();

  const query = params.get('query');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        setIsError(false);
        const results = await fetchByRegion(query);
        setCountries(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [query]);
  return (
    <Section>
      <Container>
        <SearchForm />
        {countries.length > 0 && <CountryList countries={countries} />}
        {isLoading && <Loader />}
        {isError && <p>No countries... Try again...</p>}
      </Container>
    </Section>
  );
};
