import { ActionType } from './action';

function threadDetailReducer(thread = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_THREADS_DETAIL:
      return action.payload.thread;
    default:
      return thread;
  }
}

export default threadDetailReducer;
