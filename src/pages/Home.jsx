import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function wrapper() {
      try {
        setLoading(true);
        setError(null);
        const response = await getCountries();
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
  }, []);

  return (
    <Section>
      <Container>
        <CountryList list={countries} />
        {loading && <Loader />}
        {error && <p>{error}</p>}
      </Container>
    </Section>
  );
};
