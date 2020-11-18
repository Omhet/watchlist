import React, { FunctionComponent } from 'react';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
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
    <Modal>
      <div className={style.main}>
        <h2>Are you sure you want to delete your account?</h2>
        <div>All the data associated with you will be deleted permanently.</div>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onDelete}>Delete</Button>
      </div>
    </Modal>
  );
};

export default AccountDeleteDialog;
