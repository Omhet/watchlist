import React, { FunctionComponent } from 'react';
import styles from './style.scss';

const HorizontalList: FunctionComponent = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

export default HorizontalList;
