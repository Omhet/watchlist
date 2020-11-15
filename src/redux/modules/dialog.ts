import { createAction } from 'typesafe-actions';
import { DialogId } from '../../types/dialog';
import { withState } from '../helpers/typesafe-reducer';

export const fsa = {
  openDialog: createAction('DIALOG/OPEN')<DialogId>(),
  closeDialog: createAction('DIALOG/CLOSE')()
};
export const dialogFsa = fsa;

interface State {
  id?: DialogId;
}

const initialState: State = {};

export const dialog = withState(initialState)
  .add(fsa.openDialog, (state, { payload }) => ({
    ...state,
    id: payload
  }))
  .add(fsa.closeDialog, state => ({
    ...state,
    id: undefined
  }));
