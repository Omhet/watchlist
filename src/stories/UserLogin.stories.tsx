import React from 'react';
import UserLogin from '../components/UserLogin/UserDropdown';

export default {
  title: 'UserLogin'
};

export const NotLoggedIn = () => (
  <UserLogin onLoginClick={() => console.log('Login')} isUserLoggedIn={false} />
);

export const LoggedIn = () => (
  <UserLogin
    onLogoutClick={() => console.log('Logout')}
    isUserLoggedIn
    userName="John Doe"
  />
);
