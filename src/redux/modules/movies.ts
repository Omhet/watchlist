import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Movie } from '../../types/movie';

export const fsa = {
  setMoviesToShow: createAction('MOVIES/SET_MOVIES_TO_SHOW')<Movie[]>()
};
export const moviesFsa = fsa;

interface State {
  toShow: Movie[];
}

const initialState: State = {
  toShow: []
};

export const movies = withState(initialState).add(
  fsa.setMoviesToShow,
  (state, { payload }) => ({
    ...state,
    toShow: payload
  })
);
