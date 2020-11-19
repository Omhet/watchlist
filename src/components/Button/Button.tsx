import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import Loader from '../Loader/Loader';

interface Props {
  className?: string;
  variant?: 'primary' | 'secondary';
  showLoader?: boolean;
  onClick?(e: React.MouseEvent): void;
}

const Button: FunctionComponent<Props> = ({
  className,
  variant = 'secondary',
  showLoader = false,
  children,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={classnames(styles.main, className, styles[variant])}
    >
      {showLoader ? <Loader /> : children}
    </button>
  );
};

export default Button;
