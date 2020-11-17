import { connect } from 'react-redux';
import { Dispatch, RootState } from '../redux/types';
import UserDropdown from '../components/UserLogin/UserDropdown';
import { signOut } from '../redux/modules/user';

const mapState = (state: RootState) => {
  return {
    username: state.user.username
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onLogoutClick: () => {
    dispatch(signOut());
  }
});

export default connect(mapState, mapDispatch)(UserDropdown);
