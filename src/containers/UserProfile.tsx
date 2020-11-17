import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile/UserProfile';
import { openSignInIfNeeded } from '../redux/modules/application';
import { Dispatch, RootState } from '../redux/types';

const mapState = (state: RootState) => {
  return {
    name: state.user.username
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(openSignInIfNeeded());
  }
});

export default connect(mapState, mapDispatch)(UserProfile);
