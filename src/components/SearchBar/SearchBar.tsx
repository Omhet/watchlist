import React from 'react';
import styles from './style.scss';
import SearchIcon from '../../icons/Search.svg';

const SearchBar = () => {
  return (
    <form className={styles.main}>
      <input
        type="text"
        placeholder="Search for movies"
        className={styles.search}
      />
      <SearchIcon width={24} height={24} />
    </form>
  );
};

export default SearchBar;
