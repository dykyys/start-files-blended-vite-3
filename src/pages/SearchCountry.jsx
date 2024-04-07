import {
  Container,
  CountryList,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [params, setParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  const region = params.get('query');
  useEffect(() => {
    if (!region) return;
    async function wrapper() {
      try {
        setIsLoading(true);
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    wrapper();
  }, [region]);
  const onSubmit = region => {
    console.log(region);
    setParams({
      query: region,
    });
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {isLoading && <Loader />}
        {Array.isArray(countries) && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
