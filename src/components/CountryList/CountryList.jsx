import { Link } from 'react-router-dom';
import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(country => {
        return (
          <GridItem key={country.id}>
            <Link>
              <img src={country.flag} alt={country.country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
