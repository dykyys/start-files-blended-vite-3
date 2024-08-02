import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCountries()
      .then(countries => {
        setCountries(countries);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {loading && <Loader />}
      </Container>
    </Section>
  );
};

export default Home;
