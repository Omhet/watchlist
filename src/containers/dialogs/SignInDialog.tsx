import { connect } from 'react-redux';
import SignInDialog from '../../components/Dialogs/SignInDialog/SignInDialog';
import { dialogFsa } from '../../redux/modules/dialog';
import { signIn, signUp } from '../../redux/modules/user';
import { Dispatch, RootState } from '../../redux/types';
import { UserError } from '../../types/user';

const mapState = (state: RootState) => {
  return {
    userExists: state.user.error === UserError.UserExists,
    areCredsInvalid: state.user.error === UserError.InvalidCreds
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onSignIn: (username: string, password: string) => {
    dispatch(signIn(username, password));
  },
  onSignUp: (username: string, password: string) => {
    dispatch(signUp(username, password));
  },
  onClose: () => {
    dispatch(dialogFsa.closeDialog());
  }
});

export default connect(mapState, mapDispatch)(SignInDialog);
