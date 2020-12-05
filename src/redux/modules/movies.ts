import { createAction } from 'typesafe-actions';
import {
  Movie,
  MovieRequest,
  MovieResponse,
  Movies,
  MovieWithInfo
} from '../../types/movie';
import {
  fetchFeaturedMovies,
  fetchMovieInfo,
  fetchSearchMovies
} from '../../utils/request';
import { withState } from '../helpers/typesafe-reducer';
import {
  getMoviesFromResponse,
  getMovieWithInfoFromResponse,
  isMovieInWatchlist
} from '../selectors/movies';
import { ThunkAction } from '../types';

export const fsa = {
  setWatchlist: createAction('MOVIES/SET_MOVIES_TO_WATCHLIST')<Movies>(),
  setMoviesLoading: createAction('MOVIES/SET_MOVIES_LOADING')<boolean>(),
  setMoviesToShow: createAction('MOVIES/SET_MOVIES_TO_SHOW')<Movies>(),
  addMoviesToShow: createAction('MOVIES/ADD_MOVIES_TO_SHOW')<Movies>(),
  setMovieToOverview: createAction('MOVIES/SET_MOVIE_TO_SHOW')<MovieWithInfo>(),
  setMoviesTitle: createAction('MOVIES/SET_MOVIES_TITLE')<string>(),
  addMovieToWatchlist: createAction('MOVIES/ADD_TO_LIST')<Movie>(),
  removeMovieFromWatchlist: createAction('MOVIES/REMOVE_FROM_LIST')<string>()
};
export const moviesFsa = fsa;

interface State {
  areMoviesLoading: boolean;
  toShow: Movies;
  watchlist: Movies;
  watchlistSet: Set<string>;
  movieOverview: MovieWithInfo;
  title: string;
}

const initialState: State = {
  areMoviesLoading: true,
  toShow: [],
  watchlist: [],
  watchlistSet: new Set(),
  movieOverview: {
    id: '',
    poster: '',
    title: '',
    rate: '',
    creators: [],
    genres: [],
    cast: []
  },
  title: ''
};

export const movies = withState(initialState)
  .add(fsa.setWatchlist, (state, { payload }) => ({
    ...state,
    watchlist: payload,
    watchlistSet: new Set(payload.map(({ id }) => id))
  }))
  .add(fsa.setMoviesToShow, (state, { payload }) => ({
    ...state,
    toShow: payload
  }))
  .add(fsa.addMoviesToShow, (state, { payload }) => ({
    ...state,
    toShow: [...state.toShow, ...payload]
  }))
  .add(fsa.setMoviesLoading, (state, { payload }) => ({
    ...state,
    areMoviesLoading: payload
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
    const { watchlistSet } = state;
    const { id } = payload;

    const watchlist = [...state.watchlist, { ...payload }];
    watchlistSet.add(id);

    return {
      ...state,
      watchlist
    };
  })
  .add(fsa.removeMovieFromWatchlist, (state, { payload: id }) => {
    const { watchlistSet } = state;

    const watchlist = state.watchlist.filter(m => {
      if (m.id === id) {
        return false;
      }
      return true;
    });
    watchlistSet.delete(id);

    return {
      ...state,
      watchlist
    };
  });

export const showMoviesFromResponse = (
  request: MovieRequest,
  response: MovieResponse
): ThunkAction => dispatch => {
  const movies = getMoviesFromResponse(response);
  if (request.page !== undefined && request.page > 1) {
    dispatch(fsa.addMoviesToShow(movies));
  } else {
    dispatch(fsa.setMoviesToShow(movies));
  }
};

export const showFeaturedMovies = (
  request: MovieRequest
): ThunkAction => async dispatch => {
  try {
    dispatch(fsa.setMoviesLoading(true));
    const response = await fetchFeaturedMovies(request);
    dispatch(showMoviesFromResponse(request, response));
  } catch {
    console.error('Failed');
  } finally {
    dispatch(fsa.setMoviesLoading(false));
  }
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
