import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from 'components';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state || '/');
  const { countryId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [countryId]);
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink.current} />
        {loading && <Loader />}
        {country && <CountryInfo {...country} />}
        {error && <Heading title={error} bottom />}
      </Container>
    </Section>
  );
};
