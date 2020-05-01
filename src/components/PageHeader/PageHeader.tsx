import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './style.scss';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import WatchlistCounter from '../../containers/WatchlistCounter';

const PageHeader = () => {
  const history = useHistory();

  return (
    <div className={styles.main}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={styles.search}>
        <SearchBar
          onSearch={value => {
            history.push(`/search?q=${value}`);
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
