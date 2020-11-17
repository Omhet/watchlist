import { connect } from 'react-redux';
import App from '../components/App/App';
import { startApp } from '../redux/modules/application';
import { Dispatch, RootState } from '../redux/types';

const mapState = (state: RootState) => {
  return {
    isUserSignedIn: state.user.isSignedIn
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onStart: () => {
    dispatch(startApp());
  }
});

export default connect(mapState, mapDispatch)(App);
