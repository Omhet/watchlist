import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';

interface Props {
  className?: string;
}

const HorizontalList: FunctionComponent<Props> = ({ children, className }) => {
  return <div className={classnames(styles.main, className)}>{children}</div>;
};

export default HorizontalList;
