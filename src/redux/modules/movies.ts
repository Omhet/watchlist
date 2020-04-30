import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Movie, Watchlist } from '../../types/movie';
import { mapMoviesResponseToMovies } from '../../utils/movies';
import { fetchFeaturedMovies } from '../../utils/request';
import { ThunkAction } from '../types';

export const fsa = {
  setMoviesToShow: createAction('MOVIES/SET_MOVIES_TO_SHOW')<Movie[]>(),
  setMoviesTitle: createAction('MOVIES/SET_MOVIES_TITLE')<string>(),
  addMovieToWatchlist: createAction('MOVIES/ADD_TO_LIST')<Movie>()
};
export const moviesFsa = fsa;

interface State {
  toShow: Movie[];
  watchlist: Watchlist;
  title: string;
}

const initialState: State = {
  toShow: [],
  watchlist: {},
  title: ''
};

export const movies = withState(initialState)
  .add(fsa.setMoviesToShow, (state, { payload }) => ({
    ...state,
    toShow: payload
  }))
  .add(fsa.setMoviesTitle, (state, { payload }) => ({
    ...state,
    title: payload
  }))
  .add(fsa.addMovieToWatchlist, (state, { payload }) => ({
    ...state,
    watchlist: {
      ...state.watchlist,
      [payload.id]: payload
    }
  }));

export const showFeaturedMovies = (): ThunkAction => async dispatch => {
  const response = await fetchFeaturedMovies();
  const movies = mapMoviesResponseToMovies(response);
  dispatch(fsa.setMoviesToShow(movies));
};
