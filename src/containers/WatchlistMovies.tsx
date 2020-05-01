import { connect } from 'react-redux';
import { moviesFsa, showWatchlistMovies } from '../redux/modules/movies';
import { Dispatch } from '../redux/types';
import MoviesBlock from '../components/MoviesBlock/MoviesBlock';

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(moviesFsa.setMoviesTitle('Your watchlist'));
    dispatch(showWatchlistMovies());
  }
});

export default connect(null, mapDispatch)(MoviesBlock);
