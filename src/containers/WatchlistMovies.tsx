import { connect } from 'react-redux';
import { moviesFsa, showWatchlistMovies } from '../redux/modules/movies';
import { Dispatch, RootState } from '../redux/types';
import MoviesBlock from '../components/MoviesBlock/MoviesBlock';
import { openSignInIfNeeded } from '../redux/modules/application';

const mapState = (state: RootState) => {
  return {
    movies: state.movies.watchlist
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(openSignInIfNeeded());
    dispatch(moviesFsa.setMoviesTitle('Your watchlist'));
    dispatch(showWatchlistMovies());
  }
});

export default connect(mapState, mapDispatch)(MoviesBlock);
