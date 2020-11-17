import { connect } from 'react-redux';
import PageHeader from '../components/PageHeader/PageHeader';
import { dialogFsa } from '../redux/modules/dialog';
import { Dispatch, RootState } from '../redux/types';
import { DialogId } from '../types/dialog';

const mapState = (state: RootState) => {
  return {
    showSignInButton: !state.user.isSignedIn,
    showUserDropdown: state.user.isSignedIn
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onSignInClick: () => {
    dispatch(dialogFsa.openDialog(DialogId.SignIn));
  }
});

export default connect(mapState, mapDispatch)(PageHeader);
