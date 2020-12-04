import React, { FunctionComponent } from 'react';
import CrossIcon from '../../icons/Cross.svg';
import Button from '../Button/Button';
import style from './style.scss';
interface ErrorToastProps {
  onClose?(): void;
  error?: Error;
}
const ErrorToast: FunctionComponent<ErrorToastProps> = ({ onClose, error }) => {
  return (
    <div className={style.main}>
      <Button onClick={onClose} className={style.closeButton}>
        <CrossIcon className={style.closeButtonIcon} />
      </Button>
      {error?.message ?? 'Error'}
    </div>
  );
};

export default ErrorToast;
