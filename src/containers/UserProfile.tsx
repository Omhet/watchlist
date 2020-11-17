import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile/UserProfile';
import { openSignInIfNeeded } from '../redux/modules/application';
import { Dispatch, RootState } from '../redux/types';

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(openSignInIfNeeded());
  },
  onSave: ({ username, password }) => {
    console.log(username, password);
  }
});

export default connect(null, mapDispatch)(UserProfile);
