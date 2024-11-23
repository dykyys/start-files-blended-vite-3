import { Grid, GridItem } from '..';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries.map(country => (
        <GridItem key={country.id}>
          <Link to={`/country/${country.id.toLowerCase()}`} state={location}>
            <img src={country.flag} alt={country.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
