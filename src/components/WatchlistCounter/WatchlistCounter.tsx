import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import ListIcon from '../../icons/List.svg';
import { isSmallScreen } from '../../utils/device';

interface Props {
  count?: number;
}

const WatchlistCounter: FunctionComponent<Props> = ({ count }) => {
  return (
    <div className={styles.main}>
      <ListIcon width={24} height={24} />
      {!isSmallScreen() && <span className={styles.text}>Watchlist</span>}
      {count !== undefined && count > 0 && (
        <div className={styles.counter}>{count}</div>
      )}
    </div>
  );
};

export default WatchlistCounter;
