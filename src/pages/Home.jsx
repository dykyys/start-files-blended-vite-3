import { Container, CountryList, Heading, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from '../service/countryApi';
import { Loader } from 'components';
export const Home = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const results = await getCountries();
        setCountries(results);
      } catch (error) {
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
        {countries.length > 0 && <CountryList countries={countries} />}
        {isLoading && <Loader />}
        {isError && <p>No countries... Try again...</p>}
      </Container>
    </Section>
  );
};
