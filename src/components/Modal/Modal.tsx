import React, { useEffect } from 'react';
import { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import style from './style.scss';

const Modal: FunctionComponent = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.main}>{children}</div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
