import { INCREMENT, DECREMENT } from './actions';
import { Action } from '../types';

function count(state = 0, action: Action<undefined>) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default count;
