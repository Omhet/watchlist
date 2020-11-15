import { connect } from 'react-redux';
import SignInDialog from '../../components/Dialogs/SignInDialog/SignInDialog';
import { signIn } from '../../redux/modules/user';
import { Dispatch } from '../../redux/types';

const mapDispatch = (dispatch: Dispatch) => ({
  onSignIn: (username: string, password: string) => {
    dispatch(signIn(username, password));
  },
  onSignUp: (username: string, password: string) => {
    console.log('sign up');
  }
});

export default connect(null, mapDispatch)(SignInDialog);
