import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';

import styles from './SearchForm.module.css';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');

  function handleChange(event) {
    setRegion(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!region) {
      return;
    }

    onSubmit(region);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
        onChange={handleChange}
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(region => {
          return (
            <option key={region.id} value={region.value}>
              {region.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
