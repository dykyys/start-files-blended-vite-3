import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import { Link } from 'react-router-dom';
const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(country => {
        return (
          <GridItem key={country.id}>
            <Link to={`/country/${country.id}`}>
              <img src={country.flag} alt={country.id} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
export default CountryList;
