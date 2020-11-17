import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react';
import Button from '../Button/Button';
import Title from '../Title/Title';
import styles from './style.scss';

interface SaveParams {
  username: string;
  password: string;
}

interface Props {
  onMount(): void;
  onSave(params: SaveParams): void;
}

const UserProfile: FunctionComponent<Props> = ({ onMount, onSave }) => {
  useEffect(() => {
    onMount();
  });

  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = useCallback(() => {
    onSave({ username, password });
  }, [username, password]);

  return (
    <div className={styles.main}>
      <Title text={`User profile`} />
      <form onSubmit={e => e.preventDefault()} className={styles.userInfo}>
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
        <Button onClick={handleSave}>Save</Button>
      </form>
      <Button className={styles.deleteAccountButton}>Delete account</Button>
    </div>
  );
};

export default UserProfile;
