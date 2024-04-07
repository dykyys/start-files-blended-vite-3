import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function wrapper() {
      try {
        setIsLoading(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    wrapper();
  }, []);

  return (
    <Section>
      <Container>
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
      {isLoading && <Loader />}
    </Section>
  );
};
