import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import SaveIcon from '../../icons/PlusRibbon.svg';
import SavedIcon from '../../icons/TickRibbon.svg';

interface Props {
  isInWatchlist: boolean;
}

const MovieRibbonIcon: FunctionComponent<Props> = ({ isInWatchlist }) => {
  const Icon = isInWatchlist ? (
    <SavedIcon className={styles.saved} />
  ) : (
    <SaveIcon className={styles.save} />
  );

  return <div className={styles.main}>{Icon}</div>;
};

export default MovieRibbonIcon;
