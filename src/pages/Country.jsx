import { Container, GoBackBtn, Heading, Section } from 'components';
import { useParams } from 'react-router-dom';

export const Country = () => {
  const { countryId } = useParams();
  console.log(countryId);
  return (
    <Section>
      <Container>
        <GoBackBtn />
      </Container>
    </Section>
  );
};
