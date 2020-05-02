import React, { FunctionComponent } from 'react';
import LogoIcon from '../../icons/VHS.svg';
import styles from './style.scss';
import { isSmallScreen } from '../../utils/device';

const Logo: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <LogoIcon width={51} height={32} />
      {!isSmallScreen() && <span className={styles.text}>WannaWatch</span>}
    </div>
  );
};

export default Logo;
