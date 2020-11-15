import { connect } from 'react-redux';
import Dialogs from '../../components/Dialogs/Dialogs';
import { RootState } from '../../redux/types';

const mapState = (state: RootState) => {
  return {
    id: state.dialog.id
  };
};

export default connect(mapState)(Dialogs);
