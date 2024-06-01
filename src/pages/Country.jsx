import { Container, GoBackBtn, GoBackBtn2, Heading, Section } from 'components';
import { useLocation, useParams } from 'react-router-dom';

export const Country = () => {

  const {
    countryId,
  } = useParams();
  

  return (
    <Section>
      <Container>
        <GoBackBtn />
        <GoBackBtn2/>
      </Container>
    </Section>
  );
};
