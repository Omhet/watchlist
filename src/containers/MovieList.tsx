import { connect } from 'react-redux';
import { RootState, Dispatch } from '../redux/types';
import MovieList from '../components/MovieList/MovieList';
import { moviesFsa } from '../redux/modules/movies';
import { Movie } from '../types/movie';

const mapState = (state: RootState) => {
  return {
    movies: state.movies.toShow
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onAddToWatchlistClick: (movie: Movie) => {
    dispatch(moviesFsa.addMovieToWatchlist(movie));
  }
});

export default connect(mapState, mapDispatch)(MovieList);
