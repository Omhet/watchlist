import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile/UserProfile';
import { openSignInIfNeeded } from '../redux/modules/application';
import { dialogFsa } from '../redux/modules/dialog';
import { updateUser } from '../redux/modules/user';
import { Dispatch, RootState } from '../redux/types';
import { DialogId } from '../types/dialog';
import { UserError, UserUpdateParams } from '../types/user';

const mapState = (state: RootState) => {
  return {
    userExists: state.user.error === UserError.UserExists
  };
};

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

export default connect(mapState, mapDispatch)(UserProfile);
