import React, { FunctionComponent, useCallback, useState } from 'react';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
import style from './style.scss';

interface SignInDialogProps {
  onSignIn(username: string, password: string): void;
  onSignUp(username: string, password: string): void;
}
const SignInDialog: FunctionComponent<SignInDialogProps> = ({
  onSignIn,
  onSignUp
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = useCallback(() => {
    onSignIn(username, password);
  }, [onSignIn, username, password]);

  const handleSignUp = useCallback(() => {
    onSignUp(username, password);
  }, [onSignUp, username, password]);

  return (
    <Modal>
      <form onSubmit={e => e.preventDefault()} className={style.main}>
        <input
          onChange={e => setUsername(e.target.value)}
          value={username}
          placeholder="Username or Email"
          type="text"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          type="password"
        />
        <Button onClick={handleSignIn}>Sign In</Button>
        <div>
          Or <Button onClick={handleSignUp}>create an account</Button> if you do
          not have one yet
        </div>
      </form>
    </Modal>
  );
};

export default SignInDialog;
