import { connect } from 'react-redux';
import SignInDialog from '../../components/Dialogs/SignInDialog/SignInDialog';
import { dialogFsa } from '../../redux/modules/dialog';
import { signIn, signUp } from '../../redux/modules/user';
import { Dispatch } from '../../redux/types';

const mapDispatch = (dispatch: Dispatch) => ({
  onSignIn: (username: string, password: string) => {
    dispatch(signIn(username, password));
    dispatch(dialogFsa.closeDialog());
  },
  onSignUp: (username: string, password: string) => {
    dispatch(signUp(username, password));
    dispatch(dialogFsa.closeDialog());
  }
});

export default connect(null, mapDispatch)(SignInDialog);
