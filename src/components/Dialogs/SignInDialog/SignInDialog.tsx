import { Formik } from 'formik';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { UserSignInErrors } from '../../../types/user';
import Button from '../../Button/Button';
import Dialog from '../Dialog/Dialog';
import style from './style.scss';
interface SignInDialogProps {
  userExists: boolean;
  onClose(): void;
  onSignIn(username: string, password: string): void;
  onSignUp(username: string, password: string): void;
}
const SignInDialog: FunctionComponent<SignInDialogProps> = ({
  onSignIn,
  onSignUp,
  onClose,
  userExists
}) => {
  const [willCreateAccount, setWillCreateAccount] = useState(false);

  const handleMethodChange = useCallback(() => {
    setWillCreateAccount(!willCreateAccount);
  }, [setWillCreateAccount, willCreateAccount]);

  return (
    <Dialog onClose={onClose}>
      <div className={style.main}>
        <Formik
          initialValues={{ username: '', password: '', repeatedPassword: '' }}
          validate={({ username, password, repeatedPassword }) => {
            const errors: UserSignInErrors = {};
            if (!username) {
              errors.username = 'Username is required';
            } else if (!/^\w+$/i.test(username)) {
              errors.username =
                'You can use only alphanumerical characters in username';
            } else if (username.length < 3) {
              errors.username = 'Username has to be at least 3 characters long';
            }

            if (!password) {
              errors.password = 'Password is required';
            } else if (password.length < 4) {
              errors.password = 'Password has to be at least 4 characters long';
            }

            if (willCreateAccount) {
              if (password !== repeatedPassword) {
                errors.repeatedPassword = 'Passwords do not match';
              }
            }

            return errors;
          }}
          onSubmit={({ username, password }) => {
            willCreateAccount
              ? onSignUp(username, password)
              : onSignIn(username, password);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form className={style.form} onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="Username"
                type="text"
                name="username"
              />
              <div className={style.error}>
                {errors.username && touched.username && errors.username}
              </div>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                name="password"
                type="password"
              />
              <div className={style.error}>
                {errors.password && touched.password && errors.password}
              </div>

              {willCreateAccount && (
                <>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.repeatedPassword}
                    placeholder="Verify password"
                    name="repeatedPassword"
                    type="password"
                  />
                  <div className={style.error}>
                    {errors.repeatedPassword &&
                      touched.repeatedPassword &&
                      errors.repeatedPassword}
                  </div>
                </>
              )}
              {willCreateAccount ? (
                <Button className={style.submitButton} variant="primary">
                  Create account
                </Button>
              ) : (
                <Button className={style.submitButton} variant="primary">
                  Sign In
                </Button>
              )}
              {userExists && (
                <div className={style.error}>
                  User with such name already exists
                </div>
              )}
            </form>
          )}
        </Formik>
        <Button
          className={style.methodChangeButton}
          onClick={handleMethodChange}
        >
          Or &nbsp;
          <span className={style.method}>
            {willCreateAccount ? 'sign in' : 'create account'}
          </span>
        </Button>
      </div>
    </Dialog>
  );
};

export default SignInDialog;
