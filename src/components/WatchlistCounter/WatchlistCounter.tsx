import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import PlusSquareIcon from '../../icons/PlusSquare.svg';

interface Props {
  count?: number;
}

const WatchlistCounter: FunctionComponent<Props> = ({ count }) => {
  return (
    <div className={styles.main}>
      <PlusSquareIcon width={16} height={16} />
      <span className={styles.text}>Watchlist</span>
      {count !== undefined && count > 0 && (
        <div className={styles.counter}>{count}</div>
      )}
    </div>
  );
};

export default WatchlistCounter;
