import React, { FunctionComponent } from 'react';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
import Dialog from '../Dialog/Dialog';
import style from './style.scss';

interface AccountDeleteDialogProps {
  onDelete(): void;
  onCancel(): void;
}
const AccountDeleteDialog: FunctionComponent<AccountDeleteDialogProps> = ({
  onDelete,
  onCancel
}) => {
  return (
    <Dialog onClose={onCancel}>
      <div className={style.main}>
        <h2>Are you sure you want to delete your account?</h2>
        <div className={style.content}>
          All the data associated with you will be deleted permanently.
        </div>
        <div className={style.buttons}>
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            className={style.deleteButton}
            variant="primary"
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default AccountDeleteDialog;
