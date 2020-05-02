import React, { FunctionComponent, useState } from 'react';
import styles from './style.scss';
import SearchIcon from '../../icons/Search.svg';
import Button from '../Button/Button';

interface Props {
  onSearch(value: string): void;
}

const SearchBar: FunctionComponent<Props> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSearch} className={styles.main}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search for movies"
        className={styles.search}
      />
      <Button className={styles.searchButton} onClick={handleSearch}>
        <SearchIcon width={24} height={24} />
      </Button>
    </form>
  );
};

export default SearchBar;
