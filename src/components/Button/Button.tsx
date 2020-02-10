import React, { FunctionComponent } from 'react';
import styles from './style.scss';

interface Props {
  onClick?(e: React.MouseEvent): void;
}

const Button: FunctionComponent<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.main}>
      {children}
    </button>
  );
};

export default Button;
