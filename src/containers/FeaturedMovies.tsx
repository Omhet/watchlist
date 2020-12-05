import { connect } from 'react-redux';
import { moviesFsa, showFeaturedMovies } from '../redux/modules/movies';
import { Dispatch, RootState } from '../redux/types';
import MoviesBlock from '../components/MoviesBlock/MoviesBlock';

const mapState = (state: RootState) => {
  return {
    movies: state.movies.toShow,
    areMoviesLoading: state.movies.areMoviesLoading
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(moviesFsa.setMoviesTitle('Featured movies'));
    dispatch(showFeaturedMovies({ page: 1 }));
    dispatch(moviesFsa.setMoviesToShow([]));
  },
  onReachMovieListEnd: (page: number) => {
    dispatch(showFeaturedMovies({ page }));
  }
});

export default connect(mapState, mapDispatch)(MoviesBlock);
