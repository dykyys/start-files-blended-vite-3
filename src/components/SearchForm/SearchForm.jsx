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
  const [region, serRegion] = useState('');

  const handleChange = evt => {
    serRegion(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!region) {
      alert('Select any region');
      return;
    }
    onSubmit(region);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        onChange={handleChange}
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(region => (
          <option key={region.id} value={region.value}>
            {region.name}
          </option>
        ))}
      </select>
    </form>
  );
};
