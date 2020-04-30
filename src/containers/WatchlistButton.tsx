import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import WatchlistButton from '../components/WatchlistButton/WatchlistButton';

const mapState = (state: RootState) => {
  return {
    count: Object.keys(state.movies.watchlist).length
  };
};

export default connect(mapState)(WatchlistButton);
