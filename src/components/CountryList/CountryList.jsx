import { Grid, GridItem } from '..';
import { Link } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(country => (
        <GridItem key={country.id}>
          <Link>
            <img src={country.flag} alt={country.capital} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
