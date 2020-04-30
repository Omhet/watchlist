import { rootReducer } from './rootReducer';
import { ThunkAction as OriginThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
export interface Action<Payload> {
  type: string;
  payload?: Payload;
}

export type RootState = ReturnType<typeof rootReducer>;

export type ThunkAction<ReturnValue = void> = OriginThunkAction<
  ReturnValue,
  RootState,
  undefined,
  AnyAction
>;

export type Dispatch<Action extends AnyAction = AnyAction> = ThunkDispatch<
  RootState,
  undefined,
  Action
>;
