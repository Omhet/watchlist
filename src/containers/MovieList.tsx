import { connect } from 'react-redux';
import { RootState, Dispatch } from '../redux/types';
import MovieList from '../components/MovieList/MovieList';
import { toggleMovieInWatchlist } from '../redux/modules/movies';
import { Movie } from '../types/movie';

const mapState = (state: RootState) => {
  return {
    movies: state.movies.toShow
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onWatchlistClick: (movie: Movie) => {
    dispatch(toggleMovieInWatchlist(movie));
  }
});

export default connect(mapState, mapDispatch)(MovieList);
