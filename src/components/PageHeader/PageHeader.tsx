import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import WatchlistCounter from '../../containers/WatchlistCounter';
import { isSmallScreen } from '../../utils/device';

const PageHeader = () => {
  return (
    <div className={styles.main}>
      {!isSmallScreen() && <Logo />}
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
