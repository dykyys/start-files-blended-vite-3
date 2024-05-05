import { Container, CountryList, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service';

export const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) {
      return;
    }
    const fetchRegion = async () => {
      const countries = await fetchByRegion(region);
      setCountries(countries);
    };
    fetchRegion();
  }, [searchParams]);
  const onSubmit = region => {
    setSearchParams({ region });
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
