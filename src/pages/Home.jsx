import { Container, CountryList, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries().then(countries => {
      setCountries(countries);
    });
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default Home;
