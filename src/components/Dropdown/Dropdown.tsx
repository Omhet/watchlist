import React, { FunctionComponent, ReactNode, useState } from 'react';
import styles from './style.scss';
import Button from '../Button/Button';
import DownArrowIcon from '../../icons/DownArrow.svg';

interface Props {
  header: ReactNode;
  isOpenByDefault?: boolean;
}

const Dropdown: FunctionComponent<Props> = ({
  header,
  children,
  isOpenByDefault = false
}) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const handleHeaderClick = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.main}>
      <Button onClick={handleHeaderClick}>
        <div className={styles.header}>
          {header}
          <DownArrowIcon className={styles.arrow} />
        </div>
      </Button>
      {isOpen && (
        <div onClick={handleItemClick} className={styles.body}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
