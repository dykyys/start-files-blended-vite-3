import { Hourglass } from 'react-loader-spinner';
import css from './Loader.module.css';
const Loader = () => {
  return (
    <div className={css.backdrop}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        colors={['#306cce', '#72a1ed']}
      />
    </div>
  );
};

export default Loader;
