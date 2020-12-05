import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import style from './style.scss';

interface Props {
  className?: string;
}

const Loader: FunctionComponent<Props> = ({ className }) => (
  <div className={classnames(style.main, className)}></div>
);

export default Loader;
