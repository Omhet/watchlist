import React, { FunctionComponent } from 'react';
import SignInDialog from '../../containers/dialogs/SignInDialog';
import { DialogId } from '../../types/dialog';

interface DialogsProps {
  id?: DialogId;
}
const Dialogs: FunctionComponent<DialogsProps> = ({ id }) => {
  switch (id) {
    case DialogId.SignIn:
      return <SignInDialog />;
    default:
      return null;
  }
};

export default Dialogs;
