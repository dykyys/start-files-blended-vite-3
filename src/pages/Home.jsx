import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {isloading && <Loader />}
      </Container>
    </Section>
  );
};
export default Home;
