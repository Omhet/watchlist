import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Movie } from '../../types/movie';

export const fsa = {
  setMoviesToShow: createAction('MOVIES/SET_MOVIES_TO_SHOW')<Movie[]>(),
  setMoviesTitle: createAction('MOVIES/SET_MOVIES_TITLE')<string>()
};
export const moviesFsa = fsa;

interface State {
  toShow: Movie[];
  title: string;
}

const initialState: State = {
  toShow: [],
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
  }));
