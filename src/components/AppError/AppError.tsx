import React, { FunctionComponent } from 'react';
import ErrorPageIcon from '../../icons/ErrorPage.svg';
import Modal from '../Modal/Modal';
import style from './style.scss';

const AppError: FunctionComponent = () => {
  return (
    <Modal>
      <div className={style.main}>
        <ErrorPageIcon className={style.errorIcon} />
        <p>Oops, something went wrong. Please, try to reload a page.</p>
      </div>
    </Modal>
  );
};

export default AppError;
