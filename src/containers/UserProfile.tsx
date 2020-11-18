import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile/UserProfile';
import { openSignInIfNeeded } from '../redux/modules/application';
import { dialogFsa } from '../redux/modules/dialog';
import { updateUser } from '../redux/modules/user';
import { Dispatch } from '../redux/types';
import { DialogId } from '../types/dialog';
import { UserUpdateParams } from '../types/user';

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(openSignInIfNeeded());
  },
  onSave: (params: UserUpdateParams) => {
    dispatch(updateUser(params));
  },
  onAccountDelete: () => {
    dispatch(dialogFsa.openDialog(DialogId.AccountDelete));
  }
});

export default connect(null, mapDispatch)(UserProfile);
