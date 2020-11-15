import React, { FunctionComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './style.scss';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import WatchlistCounter from '../../containers/WatchlistCounter';
import Button from '../Button/Button';

export interface PageHeaderProps {
  showSignInButton: boolean;
  onSignInClick(): void;
}

const PageHeader: FunctionComponent<PageHeaderProps> = ({
  showSignInButton,
  onSignInClick
}) => {
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
      {showSignInButton ? (
        <Button onClick={onSignInClick} className={styles.signButton}>
          Sign in
        </Button>
      ) : (
        <Link to="/list">
          <WatchlistCounter />
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
