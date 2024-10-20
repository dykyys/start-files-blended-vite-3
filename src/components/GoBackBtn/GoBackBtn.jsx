import { Link } from 'react-router-dom';
import styles from './GoBackBtn.module.css';

export const GoBackBtn = ({ path }) => {
  return (
    <Link to={path} className={styles.link}>
      Go back
    </Link>
  );
};
