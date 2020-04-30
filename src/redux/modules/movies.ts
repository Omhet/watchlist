import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Movie, MovieRecord } from '../../types/movie';
import { mapMoviesResponseToMovieRecord } from '../../utils/movies';
import { fetchFeaturedMovies } from '../../utils/request';
import { ThunkAction } from '../types';

export const fsa = {
  setMoviesToShow: createAction('MOVIES/SET_MOVIES_TO_SHOW')<MovieRecord>(),
  setMoviesTitle: createAction('MOVIES/SET_MOVIES_TITLE')<string>(),
  addMovieToWatchlist: createAction('MOVIES/ADD_TO_LIST')<Movie>()
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
  });

export const showFeaturedMovies = (): ThunkAction => async dispatch => {
  const response = await fetchFeaturedMovies();
  const movies = mapMoviesResponseToMovieRecord(response);
  dispatch(fsa.setMoviesToShow(movies));
};
