import { GridItem, Grid } from '..';
import { Link } from 'react-router-dom';

export const CountryList = ({ list }) => {
  return (
    <Grid>
      {list.map(item => {
        return (
          <GridItem key={item.id}>
            <Link to={ `/country/${item.id}`} >
              <img src={ item.flag} alt={item.country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
