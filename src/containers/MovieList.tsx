import { connect } from 'react-redux';
import { RootState } from '../redux/types';
import MovieList from '../components/MovieList/MovieList';

const mapState = (state: RootState) => {
  return {
    movies: state.movies.toShow
  };
};

export default connect(mapState)(MovieList);
