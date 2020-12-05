import { connect } from 'react-redux';
import PageHeader from '../components/PageHeader/PageHeader';
import { dialogFsa } from '../redux/modules/dialog';
import { Dispatch, RootState } from '../redux/types';
import { DialogId } from '../types/dialog';

const mapState = ({ movies: { isWatchlistLoading }, user }: RootState) => {
  return {
    showSignInButton: !user.isSignedIn && !isWatchlistLoading,
    showUserDropdown: user.isSignedIn && !isWatchlistLoading,
    showUserLoader: isWatchlistLoading,
    showWatchlistCounter: user.isSignedIn && !isWatchlistLoading
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onSignInClick: () => {
    dispatch(dialogFsa.openDialog(DialogId.SignIn));
  }
});

export default connect(mapState, mapDispatch)(PageHeader);
