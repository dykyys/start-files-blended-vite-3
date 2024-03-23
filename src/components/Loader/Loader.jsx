import { BeatLoader } from 'react-spinners';

import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <BeatLoader color="#40bea5" />
    </div>
  );
};
