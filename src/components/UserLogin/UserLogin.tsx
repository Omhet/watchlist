import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import UserIcon from '../../icons/User.svg';

interface Props {
  isUserLoggedIn: boolean;
  userName?: string;
  onLoginClick?(): void;
  onLogoutClick?(): void;
}

const UserLogin: FunctionComponent<Props> = ({
  onLoginClick,
  onLogoutClick,
  isUserLoggedIn,
  userName = 'User'
}) => {
  const LoginButton = <Button onClick={onLoginClick}>Login</Button>;

  const UserHeader = (
    <div className={styles.userHeader}>
      <UserIcon className={styles.userIcon} /> {userName}
    </div>
  );

  const UserDropdown = (
    <Dropdown header={UserHeader}>
      <Button onClick={onLogoutClick}>Logout</Button>
    </Dropdown>
  );

  return <>{isUserLoggedIn ? UserDropdown : LoginButton}</>;
};

export default UserLogin;
