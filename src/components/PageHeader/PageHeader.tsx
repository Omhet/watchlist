import React from 'react';
import styles from './style.scss';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import WatchlistButton from '../WatchlistButton/WatchlistButton';

const PageHeader = () => {
  return (
    <div className={styles.main}>
      <Logo />
      <SearchBar
        onSearch={value => {
          console.log(value);
        }}
      />
      <WatchlistButton />
    </div>
  );
};

export default PageHeader;
