import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import WatchlistCounter from '../components/WatchlistCounter/WatchlistCounter';

const mapState = (state: RootState) => {
  return {
    count: state.movies.watchlist.length
  };
};

export default connect(mapState)(WatchlistCounter);
