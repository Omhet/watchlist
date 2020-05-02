import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Movie, Movies, MovieRequest } from '../../types/movie';
import { getMoviesFromResponse, isMovieInWatchlist } from '../selectors/movies';
import { fetchFeaturedMovies, fetchSearchMovies } from '../../utils/request';
import { ThunkAction } from '../types';

export const fsa = {
  setMoviesToShow: createAction('MOVIES/SET_MOVIES_TO_SHOW')<Movies>(),
  addMoviesToShow: createAction('MOVIES/ADD_MOVIES_TO_SHOW')<Movies>(),
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
  toShow: [],
  watchlist: [],
  title: ''
};

export const movies = withState(initialState)
  .add(fsa.setMoviesToShow, (state, { payload }) => ({
    ...state,
    toShow: payload
  }))
  .add(fsa.addMoviesToShow, (state, { payload }) => ({
    ...state,
    toShow: [...state.toShow, ...payload]
  }))
  .add(fsa.setMoviesTitle, (state, { payload }) => ({
    ...state,
    title: payload
  }))
  .add(fsa.addMovieToWatchlist, (state, { payload }) => {
    const { id } = payload;
    const watchlist = [...state.watchlist, payload];

    const toShow = state.toShow.map(m => {
      if (m.id === id) {
        return { ...m, isInWatchlist: true };
      }
      return m;
    });

    return {
      ...state,
      watchlist,
      toShow
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
  if (request.page > 1) {
    dispatch(fsa.addMoviesToShow(movies));
  } else {
    dispatch(fsa.setMoviesToShow(movies));
  }
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
  const { id } = movie;
  if (!isMovieInWatchlist(getState(), id)) {
    dispatch(fsa.addMovieToWatchlist(movie));
  } else {
    dispatch(fsa.removeMovieFromWatchlist(id));
  }
};
