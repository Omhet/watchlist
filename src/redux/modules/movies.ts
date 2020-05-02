import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Movie, Movies, MovieRequest } from '../../types/movie';
import { getMoviesFromResponse } from '../selectors/movies';
import { fetchFeaturedMovies, fetchSearchMovies } from '../../utils/request';
import { ThunkAction } from '../types';

export const fsa = {
  setMoviesToShow: createAction('MOVIES/SET_MOVIES_TO_SHOW')<Movies>(),
  addMoviesToShow: createAction('MOVIES/ADD_MOVIES_TO_SHOW')<Movies>(),
  setWatchlist: createAction('MOVIES/SET_WATCHLIST')<Movies>(),
  setMoviesTitle: createAction('MOVIES/SET_MOVIES_TITLE')<string>(),
  addMovieToWatchlist: createAction('MOVIES/ADD_TO_LIST')<Movie>(),
  removeMovieFromWatchlist: createAction('MOVIES/REMOVE_FROM_LIST')<string>()
};
export const moviesFsa = fsa;

interface State {
  toShow: Movies;
  watchlist: Movies;
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
  .add(fsa.addMoviesToShow, (state, { payload }) => ({
    ...state,
    toShow: {
      ...state.toShow,
      ...payload
    }
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

export const showFeaturedMovies = (
  request: MovieRequest
): ThunkAction => async (dispatch, getState) => {
  const state = getState();
  const response = await fetchFeaturedMovies(request);
  const movies = getMoviesFromResponse(state, response);
  if (request.page > 1) {
    dispatch(fsa.addMoviesToShow(movies));
  } else {
    dispatch(fsa.setMoviesToShow(movies));
  }
};

export const showSearchMovies = (request: MovieRequest): ThunkAction => async (
  dispatch,
  getState
) => {
  const state = getState();
  const response = await fetchSearchMovies(request);
  const movies = getMoviesFromResponse(state, response);
  dispatch(fsa.setMoviesToShow(movies));
};

export const showWatchlistMovies = (): ThunkAction => (dispatch, getState) => {
  const {
    movies: { watchlist }
  } = getState();
  dispatch(fsa.setMoviesToShow(watchlist));
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
