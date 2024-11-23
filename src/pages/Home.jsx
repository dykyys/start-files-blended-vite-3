import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from '../service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        {isLoading && <Loader />}
        {isError && <p>Error...</p>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
