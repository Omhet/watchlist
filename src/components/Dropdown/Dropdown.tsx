import React, { FunctionComponent, ReactNode } from 'react';
import styles from './style.scss';
import Button from '../Button/Button';
import DownArrowIcon from '../../icons/DownArrow.svg';

interface Props {
  header: ReactNode;
}

const Dropdown: FunctionComponent<Props> = ({ header }) => {
  return (
    <div className={styles.main}>
      <Button>
        <>
          {header}
          <DownArrowIcon className={styles.arrow} />
        </>
      </Button>
    </div>
  );
};

export default Dropdown;
