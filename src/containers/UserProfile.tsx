import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile/UserProfile';
import { openSignInIfNeeded } from '../redux/modules/application';
import { updateUser } from '../redux/modules/user';
import { Dispatch } from '../redux/types';
import { UserUpdateParams } from '../types/user';

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(openSignInIfNeeded());
  },
  onSave: (params: UserUpdateParams) => {
    dispatch(updateUser(params));
  }
});

export default connect(null, mapDispatch)(UserProfile);
