import { connect } from 'react-redux';
import { moviesFsa, showFeaturedMovies } from '../redux/modules/movies';
import { Dispatch } from '../redux/types';
import MoviesBlock from '../components/MoviesBlock/MoviesBlock';

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(moviesFsa.setMoviesTitle('Featured movies'));
    dispatch(showFeaturedMovies({ page: 1 }));
  },
  onReachMovieListEnd: (page: number) => {
    dispatch(showFeaturedMovies({ page }));
  }
});

export default connect(null, mapDispatch)(MoviesBlock);
