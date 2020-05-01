import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Movie, MovieRecord } from '../../types/movie';
import { getMoviesFromResponse } from '../selectors/movies';
import { fetchFeaturedMovies } from '../../utils/request';
import { ThunkAction } from '../types';

export const fsa = {
  setMoviesToShow: createAction('MOVIES/SET_MOVIES_TO_SHOW')<MovieRecord>(),
  setWatchlist: createAction('MOVIES/SET_WATCHLIST')<MovieRecord>(),
  setMoviesTitle: createAction('MOVIES/SET_MOVIES_TITLE')<string>(),
  addMovieToWatchlist: createAction('MOVIES/ADD_TO_LIST')<Movie>(),
  removeMovieFromWatchlist: createAction('MOVIES/REMOVE_FROM_LIST')<string>()
};
export const moviesFsa = fsa;

interface State {
  toShow: MovieRecord;
  watchlist: MovieRecord;
  title: string;
}

const initialState: State = {
  toShow: {},
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
  .add(fsa.setWatchlist, (state, { payload }) => ({
    ...state,
    watchlist: payload
  }))
  .add(fsa.addMovieToWatchlist, (state, { payload }) => {
    const { id } = payload;
    const toShow = { ...state.toShow };
    const watchlist = { ...state.watchlist };

    watchlist[id] = payload;
    toShow[id].isInWatchlist = true;

    return {
      ...state,
      watchlist,
      toShow
    };
  })
  .add(fsa.removeMovieFromWatchlist, (state, { payload: id }) => {
    const toShow = { ...state.toShow };
    const watchlist = { ...state.watchlist };

    delete watchlist[id];
    toShow[id].isInWatchlist = false;

    return {
      ...state,
      watchlist,
      toShow
    };
  });

export const showFeaturedMovies = (): ThunkAction => async (
  dispatch,
  getState
) => {
  const state = getState();
  const response = await fetchFeaturedMovies();
  const movies = getMoviesFromResponse(state, response);
  dispatch(fsa.setMoviesToShow(movies));
};

export const toggleMovieInWatchlist = (movie: Movie): ThunkAction => (
  dispatch,
  getState
) => {
  const {
    movies: { watchlist }
  } = getState();
  const { id } = movie;
  if (watchlist[id] === undefined) {
    dispatch(fsa.addMovieToWatchlist(movie));
  } else {
    dispatch(fsa.removeMovieFromWatchlist(id));
  }
};
