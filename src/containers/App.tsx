import { connect } from 'react-redux';
import App from '../components/App/App';
import { moviesFsa, showFeaturedMovies } from '../redux/modules/movies';
import { Dispatch } from 'redux';

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(moviesFsa.setMoviesTitle('Featured movies'));
    dispatch(showFeaturedMovies());
  }
});

export default connect(null, mapDispatch)(App);
