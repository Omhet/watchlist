import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import {
  Movie,
  Movies,
  MovieRequest,
  MovieResponse,
  MovieWithInfo
} from '../../types/movie';
import {
  getMoviesFromResponse,
  isMovieInWatchlist,
  getMovieWithInfoFromResponse
} from '../selectors/movies';
import {
  fetchFeaturedMovies,
  fetchSearchMovies,
  fetchMovieInfo,
  addMovieToWatchlist,
  removeMovieFromWatchlist
} from '../../utils/request';
import { ThunkAction } from '../types';
import { dialogFsa } from './dialog';
import { DialogId } from '../../types/dialog';

export const fsa = {
  setMoviesToWatchlist: createAction('MOVIES/SET_MOVIES_TO_WATCHLIST')<
    Movies
  >(),
  setMoviesToShow: createAction('MOVIES/SET_MOVIES_TO_SHOW')<Movies>(),
  addMoviesToShow: createAction('MOVIES/ADD_MOVIES_TO_SHOW')<Movies>(),
  setMovieToOverview: createAction('MOVIES/SET_MOVIE_TO_SHOW')<MovieWithInfo>(),
  setMoviesTitle: createAction('MOVIES/SET_MOVIES_TITLE')<string>(),
  addMovieToWatchlist: createAction('MOVIES/ADD_TO_LIST')<Movie>(),
  removeMovieFromWatchlist: createAction('MOVIES/REMOVE_FROM_LIST')<string>()
};
export const moviesFsa = fsa;

interface State {
  toShow: Movies;
  watchlist: Movies;
  movieOverview: MovieWithInfo;
  title: string;
}

const initialState: State = {
  toShow: [],
  watchlist: [],
  movieOverview: {
    id: '',
    poster: '',
    title: '',
    rate: '',
    isInWatchlist: false,
    creators: [],
    genres: [],
    cast: []
  },
  title: ''
};

export const movies = withState(initialState)
  .add(fsa.setMoviesToWatchlist, (state, { payload }) => ({
    ...state,
    watchlist: payload
  }))
  .add(fsa.setMoviesToShow, (state, { payload }) => ({
    ...state,
    toShow: payload
  }))
  .add(fsa.addMoviesToShow, (state, { payload }) => ({
    ...state,
    toShow: [...state.toShow, ...payload]
  }))
  .add(fsa.setMovieToOverview, (state, { payload }) => ({
    ...state,
    movieOverview: payload
  }))
  .add(fsa.setMoviesTitle, (state, { payload }) => ({
    ...state,
    title: payload
  }))
  .add(fsa.addMovieToWatchlist, (state, { payload }) => {
    const { id } = payload;

    const watchlist = [...state.watchlist, { ...payload, isInWatchlist: true }];

    const toShow = state.toShow.map(m => {
      if (m.id === id) {
        return { ...m, isInWatchlist: true };
      }
      return m;
    });

    const movieOverview = { ...state.movieOverview };
    movieOverview.isInWatchlist = true;

    return {
      ...state,
      watchlist,
      toShow,
      movieOverview
    };
  })
  .add(fsa.removeMovieFromWatchlist, (state, { payload: id }) => {
    const watchlist = state.watchlist.filter(m => {
      if (m.id === id) {
        return false;
      }
      return true;
    });
    const toShow = state.toShow.map(m => {
      if (m.id === id) {
        return { ...m, isInWatchlist: false };
      }
      return m;
    });

    const movieOverview = { ...state.movieOverview };
    movieOverview.isInWatchlist = false;

    return {
      ...state,
      watchlist,
      toShow,
      movieOverview
    };
  });

export const showMoviesFromResponse = (
  request: MovieRequest,
  response: MovieResponse
): ThunkAction => (dispatch, getState) => {
  const state = getState();
  const movies = getMoviesFromResponse(state, response);
  if (request.page !== undefined && request.page > 1) {
    dispatch(fsa.addMoviesToShow(movies));
  } else {
    dispatch(fsa.setMoviesToShow(movies));
  }
};

export const showFeaturedMovies = (
  request: MovieRequest
): ThunkAction => async dispatch => {
  const response = await fetchFeaturedMovies(request);
  dispatch(showMoviesFromResponse(request, response));
};

export const showSearchMovies = (
  request: MovieRequest
): ThunkAction => async dispatch => {
  const response = await fetchSearchMovies(request);
  dispatch(showMoviesFromResponse(request, response));
};

export const setMovieToOverview = (id: string): ThunkAction => async (
  dispatch,
  getState
) => {
  try {
    const movieResult = await fetchMovieInfo({ id });
    const movie = getMovieWithInfoFromResponse(getState(), movieResult);
    dispatch(fsa.setMovieToOverview(movie));
  } catch (error) {
    console.error(error);
  }
};

export const showWatchlistMovies = (): ThunkAction => (dispatch, getState) => {
  const {
    movies: { watchlist }
  } = getState();
  dispatch(fsa.setMoviesToShow(watchlist));
};

export const toggleMovieInWatchlistLocally = (movie: Movie): ThunkAction => (
  dispatch,
  getState
) => {
  const { id } = movie;
  if (!isMovieInWatchlist(getState(), id)) {
    dispatch(fsa.addMovieToWatchlist(movie));
  } else {
    dispatch(fsa.removeMovieFromWatchlist(id));
  }
};
