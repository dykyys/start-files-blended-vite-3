import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getCountries();

        setCountries(response);
      } catch (error) {
        setError(error.massage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default Home;
