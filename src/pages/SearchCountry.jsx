import {
  Container,
  CountryList,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [params, setParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getRegionName = regionName => {
    console.log(regionName);
    setParams({ region: regionName });
  };

  console.log(params.get('region'));
  const region = params.get('region');

  useEffect(() => {
    if (!region) return;
    const asyncWrapper = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [region]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={getRegionName} />
        {isLoading && <Loader />}
        {isError && <p>Error...</p>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
