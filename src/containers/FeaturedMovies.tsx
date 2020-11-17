import { connect } from 'react-redux';
import { moviesFsa, showFeaturedMovies } from '../redux/modules/movies';
import { Dispatch, RootState } from '../redux/types';
import MoviesBlock from '../components/MoviesBlock/MoviesBlock';

const mapState = (state: RootState) => {
  return {
    movies: state.movies.toShow
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(moviesFsa.setMoviesTitle('Featured movies'));
    dispatch(showFeaturedMovies({ page: 1 }));
  },
  onReachMovieListEnd: (page: number) => {
    dispatch(showFeaturedMovies({ page }));
  }
});

export default connect(mapState, mapDispatch)(MoviesBlock);
