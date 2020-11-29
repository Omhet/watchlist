import { Formik } from 'formik';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { UserSignInErrors, UserUpdateParams } from '../../types/user';
import Button from '../Button/Button';
import Title from '../Title/Title';
import styles from './style.scss';

interface Props {
  onMount(): void;
  onSave(params: UserUpdateParams): void;
  onAccountDelete(): void;
}

const UserProfile: FunctionComponent<Props> = ({
  onMount,
  onSave,
  onAccountDelete
}) => {
  useEffect(() => {
    onMount();
  });

  const [willChangeName, setWillChangeName] = useState(false);
  const [willChangePassword, setWillChangePassword] = useState(false);

  return (
    <div className={styles.main}>
      <Title text="User profile" />
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

          if (password !== repeatedPassword) {
            errors.repeatedPassword = 'Passwords do not match';
          }

          return errors;
        }}
        onSubmit={({ username, password }) => {
          console.log({ username, password });
          setWillChangePassword(false);
          setWillChangeName(false);
          onSave({ username, password });
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
          <form className={styles.userInfo} onSubmit={handleSubmit}>
            {willChangeName ? (
              <>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Username"
                  type="text"
                  name="username"
                />
                <div className={styles.error}>
                  {errors.username && touched.username && errors.username}
                </div>
              </>
            ) : (
              <Button onClick={() => setWillChangeName(true)}>
                Change name
              </Button>
            )}
            {willChangePassword ? (
              <>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                  name="password"
                  type="password"
                />
                <div className={styles.error}>
                  {errors.password && touched.password && errors.password}
                </div>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeatedPassword}
                  placeholder="Verify password"
                  name="repeatedPassword"
                  type="password"
                />
                <div className={styles.error}>
                  {errors.repeatedPassword &&
                    touched.repeatedPassword &&
                    errors.repeatedPassword}
                </div>
              </>
            ) : (
              <Button onClick={() => setWillChangePassword(true)}>
                Change password
              </Button>
            )}

            {(willChangePassword || willChangeName) && (
              <Button variant="primary" onClick={() => handleSubmit()}>
                Save
              </Button>
            )}
          </form>
        )}
      </Formik>
      <Button onClick={onAccountDelete} className={styles.deleteAccountButton}>
        Delete account
      </Button>
    </div>
  );
};

export default UserProfile;
