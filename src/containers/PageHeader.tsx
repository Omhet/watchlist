import { connect } from 'react-redux';
import PageHeader, {
  PageHeaderProps
} from '../components/PageHeader/PageHeader';
import { RootState } from '../redux/types';

const mapState = (state: RootState): PageHeaderProps => {
  return {
    showSignInButton: !state.user.isSignedIn
  };
};

export default connect(mapState)(PageHeader);
