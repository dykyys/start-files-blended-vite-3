import {
  Container,
  CountryList,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  function onSubmit(region) {
    setSearchParams({ region });
  }

  useEffect(() => {
    const region = searchParams.get('region');

    if (!region) return;

    setLoading(true);

    fetchByRegion(region)
      .then(countries => setCountries(countries))
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
        {loading && <Loader />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
