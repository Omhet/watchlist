import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import UserIcon from '../../icons/User.svg';
import { Link } from 'react-router-dom';

interface Props {
  username?: string;
  onLogoutClick?(): void;
}

const UserDropdown: FunctionComponent<Props> = ({
  onLogoutClick,
  username = 'User'
}) => {
  const UserHeader = (
    <div className={styles.userHeader}>
      <UserIcon className={styles.userIcon} /> {username}
    </div>
  );

  return (
    <Dropdown header={UserHeader}>
      <Link to="user">Profile</Link>
      <Button onClick={onLogoutClick}>Logout</Button>
    </Dropdown>
  );
};

export default UserDropdown;
