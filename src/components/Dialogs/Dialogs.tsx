import React, { FunctionComponent } from 'react';
import AccountDeleteDialog from '../../containers/dialogs/AccountDeleteDialog';
import SignInDialog from '../../containers/dialogs/SignInDialog';
import { DialogId } from '../../types/dialog';

interface DialogsProps {
  id?: DialogId;
}
const Dialogs: FunctionComponent<DialogsProps> = ({ id }) => {
  switch (id) {
    case DialogId.SignIn:
      return <SignInDialog />;
    case DialogId.AccountDelete:
      return <AccountDeleteDialog />;
    default:
      return null;
  }
};

export default Dialogs;
