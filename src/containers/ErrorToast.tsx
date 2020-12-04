import { connect } from 'react-redux';
import ErrorToast from '../components/ErrorToast/ErrorToast';
import { appFsa } from '../redux/modules/application';
import { Dispatch, RootState } from '../redux/types';

const mapState = (state: RootState) => {
  return {
    error: state.app.error
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onClose: () => {
    dispatch(appFsa.setError(undefined));
  }
});

export default connect(mapState, mapDispatch)(ErrorToast);
