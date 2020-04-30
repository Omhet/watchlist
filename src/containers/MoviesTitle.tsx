import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import Title from '../components/Title/Title';

const mapState = (state: RootState) => {
  return {
    text: state.movies.title
  };
};

export default connect(mapState)(Title);
