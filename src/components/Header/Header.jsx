import { NavLink } from 'react-router-dom';
import { FaFlagUsa } from 'react-icons/fa';

import styles from './Header.module.css';

const Header = () => {
  const addActive = ({ isActive }) => (isActive ? styles.active : styles.link);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <FaFlagUsa size="40px" color="#0c7bc1" />

          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink to="/" className={addActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/country" className={addActive}>
                  Countries
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
