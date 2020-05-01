import { connect } from 'react-redux';
import App from '../components/App/App';
import { moviesFsa, showFeaturedMovies } from '../redux/modules/movies';
import { Dispatch } from '../redux/types';
import { loadWatchlist } from '../utils/storage';

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    const watchlist = loadWatchlist();
    dispatch(moviesFsa.setWatchlist(watchlist));

    dispatch(moviesFsa.setMoviesTitle('Featured movies'));
    dispatch(showFeaturedMovies());
  }
});

export default connect(null, mapDispatch)(App);
