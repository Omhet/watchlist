import { connect } from 'react-redux';
import AccountDeleteDialog from '../../components/Dialogs/AccountDeleteDialog/AccountDeleteDialog';
import { dialogFsa } from '../../redux/modules/dialog';
import { deleteUser } from '../../redux/modules/user';
import { Dispatch } from '../../redux/types';

const mapDispatch = (dispatch: Dispatch) => ({
  onDelete: () => {
    dispatch(deleteUser());
    dispatch(dialogFsa.closeDialog());
  },
  onCancel: () => {
    dispatch(dialogFsa.closeDialog());
  }
});

export default connect(null, mapDispatch)(AccountDeleteDialog);
