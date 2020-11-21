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
  const [willCreateAccount, setWillCreateAccount] = useState(false);

  const handleMethodChange = useCallback(() => {
    setWillCreateAccount(!willCreateAccount);
  }, [setWillCreateAccount, willCreateAccount]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifiedPassword, setVerifiedPassword] = useState('');

  const handleSignIn = useCallback(() => {
    onSignIn(username, password);
  }, [onSignIn, username, password]);

  const handleSignUp = useCallback(() => {
    if (verifiedPassword !== password) {
      return;
    }

    onSignUp(username, password);
  }, [onSignUp, username, password, verifiedPassword]);

  return (
    <Modal>
      <div className={style.main}>
        <form className={style.form} onSubmit={e => e.preventDefault()}>
          <input
            onChange={e => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            type="text"
          />
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            type="password"
          />
          {willCreateAccount && (
            <input
              onChange={e => setVerifiedPassword(e.target.value)}
              value={password}
              placeholder="Verify password"
              type="password"
            />
          )}
          {willCreateAccount ? (
            <Button
              className={style.submitButton}
              variant="primary"
              onClick={handleSignUp}
            >
              Create account
            </Button>
          ) : (
            <Button
              className={style.submitButton}
              variant="primary"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          )}
        </form>
        <Button
          className={style.methodChangeButton}
          onClick={handleMethodChange}
        >
          Or {willCreateAccount ? 'sign in' : 'create account'}
        </Button>
      </div>
    </Modal>
  );
};

export default SignInDialog;
