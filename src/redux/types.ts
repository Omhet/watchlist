import { rootReducer } from './rootReducer';
export interface Action<Payload> {
  type: string;
  payload?: Payload;
}

export type RootState = ReturnType<typeof rootReducer>;
