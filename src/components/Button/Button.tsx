import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';

interface Props {
  className?: string;
  onClick?(e: React.MouseEvent): void;
}

const Button: FunctionComponent<Props> = ({ className, children, onClick }) => {
  return (
    <button onClick={onClick} className={classnames(styles.main, className)}>
      {children}
    </button>
  );
};

export default Button;
