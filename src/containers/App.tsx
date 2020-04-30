import { connect } from 'react-redux';
import App from '../components/App/App';
import { moviesFsa } from '../redux/modules/movies';
import movies from '../stories/MovieList/data.json';
import { Dispatch } from 'redux';

const mapDispatch = (dispatch: Dispatch) => ({
  onMount: () => {
    dispatch(moviesFsa.setMoviesToShow(movies));
    dispatch(moviesFsa.setMoviesTitle('Featured movies'));
  }
});

export default connect(null, mapDispatch)(App);
