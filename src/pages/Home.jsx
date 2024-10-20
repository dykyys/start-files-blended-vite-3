import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        <CountryList countries={countries} />
        {error && (
          <Heading title="Something went wrong, try again later" bottom />
        )}
      </Container>
    </Section>
  );
};
