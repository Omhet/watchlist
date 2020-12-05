import React, { FunctionComponent } from 'react';
import ErrorPageIcon from '../../icons/ErrorPage.svg';
import style from './style.scss';

const AppError: FunctionComponent = () => {
  return (
    <div className={style.main}>
      <ErrorPageIcon className={style.errorIcon} />
      <p>
        Oops, something went wrong. Our best people already working on the
        solution
      </p>
    </div>
  );
};

export default AppError;
