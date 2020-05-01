import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import WatchlistCounter from '../../containers/WatchlistCounter';

const PageHeader = () => {
  return (
    <div className={styles.main}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={styles.search}>
        <SearchBar
          onSearch={value => {
            console.log(value);
          }}
        />
      </div>
      <Link to="/list">
        <WatchlistCounter />
      </Link>
    </div>
  );
};

export default PageHeader;
