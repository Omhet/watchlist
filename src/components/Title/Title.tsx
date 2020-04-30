import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';

interface Props {
  text: string;
  className?: string;
}

const Title: FunctionComponent<Props> = ({ text, className }) => {
  return <h1 className={classnames(styles.main, className)}>{text}</h1>;
};

export default Title;
