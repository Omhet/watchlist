import { connect } from 'react-redux';
import { moviesFsa, showWatchlistMovies } from '../redux/modules/movies';
import { Dispatch, RootState } from '../redux/types';
import MoviesBlock from '../components/MoviesBlock/MoviesBlock';

const mapState = (state: RootState) => {
  return {
    movies: state.movies.watchlist,
    areMoviesLoading: state.movies.isWatchlistLoading
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(moviesFsa.setMoviesTitle('Your watchlist'));
    dispatch(showWatchlistMovies());
  }
});

export default connect(mapState, mapDispatch)(MoviesBlock);
