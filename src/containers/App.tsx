import { connect } from 'react-redux';
import App from '../components/App/App';
import { startApp } from '../redux/modules/application';
import { Dispatch } from '../redux/types';

const mapDispatch = (dispatch: Dispatch) => ({
  onStart: () => {
    dispatch(startApp());
  }
});

export default connect(null, mapDispatch)(App);
