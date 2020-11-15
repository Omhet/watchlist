import React, { FunctionComponent } from 'react';
import SignInDialog from '../../containers/dialogs/SignInDialog';

interface DialogsProps {
  id: string;
}
const Dialogs: FunctionComponent<DialogsProps> = ({ id }) => {
  switch (id) {
    case 'sign':
      return <SignInDialog />;
    default:
      return null;
  }
};

export default Dialogs;
