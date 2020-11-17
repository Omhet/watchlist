import React, { FunctionComponent, useEffect, useState } from 'react';
import Button from '../Button/Button';
import Title from '../Title/Title';
import styles from './style.scss';

interface Props {
  name?: string;
  onMount(): void;
}

const UserProfile: FunctionComponent<Props> = ({ name, onMount }) => {
  useEffect(() => {
    onMount();
  });

  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.main}>
      <Title text={`User profile`} />
      <form className={styles.userInfo}>
        <input
          onChange={e => setUsername(e.target.value)}
          value={username}
          placeholder="New username"
          type="text"
        />
        <input
          onChange={e => setOldPassword(e.target.value)}
          value={oldPassword}
          placeholder="Old password"
          type="password"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="New password"
          type="password"
        />
      </form>
      <Button className={styles.deleteAccountButton}>Delete account</Button>
    </div>
  );
};

export default UserProfile;
