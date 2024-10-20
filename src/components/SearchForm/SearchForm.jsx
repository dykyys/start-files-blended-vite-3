import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useState } from 'react';
const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');
  const onHadleChange = e => {
    setRegion(e.target.value);
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    onSubmit(region);
  };

  return (
    <form className={styles.form} onSubmit={onHandleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        onChange={onHadleChange}
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(region => {
          return (
            <option value={region.value} key={region.id}>
              {region.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
