import React, { FunctionComponent } from 'react';
import CrossIcon from '../../icons/Cross.svg';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import style from './style.scss';
interface ErrorToastProps {
  onClose?(): void;
  error?: Error;
}
const ErrorToast: FunctionComponent<ErrorToastProps> = ({ onClose, error }) => {
  return (
    <Modal>
      <div className={style.main}>
        <Button onClick={onClose} className={style.closeButton}>
          <CrossIcon className={style.closeButtonIcon} />
        </Button>
        {error?.message ?? 'Error'}
      </div>
    </Modal>
  );
};

export default ErrorToast;
