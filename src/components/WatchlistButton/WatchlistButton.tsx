import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import Button from '../Button/Button';
import PlusSquareIcon from '../../icons/PlusSquare.svg';

interface Props {
  count?: number;
}

const WatchlistButton: FunctionComponent<Props> = ({ count }) => {
  return (
    <Button>
      <>
        <PlusSquareIcon width={16} height={16} />
        <span className={styles.text}>Watchlist</span>
        {count && <div className={styles.counter}>{count}</div>}
      </>
    </Button>
  );
};

export default WatchlistButton;
