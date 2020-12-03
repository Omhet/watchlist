import React, { FunctionComponent, useCallback, useState } from 'react';
import Button from '../../Button/Button';
import CrossIcon from '../../../icons/Cross.svg';
import Modal from '../../Modal/Modal';
import style from './style.scss';
interface DialogProps {
  onClose?(): void;
}
const Dialog: FunctionComponent<DialogProps> = ({ onClose, children }) => {
  return (
    <Modal>
      <div className={style.main}>
        <Button onClick={onClose} className={style.closeButton}>
          <CrossIcon className={style.closeButtonIcon} />
        </Button>
        {children}
      </div>
    </Modal>
  );
};

export default Dialog;
