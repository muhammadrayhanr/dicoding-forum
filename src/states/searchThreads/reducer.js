import { ActionType } from './action';

function searchThreadsReducer(search = '', action = {}) {
  switch (action.type) {
    case ActionType.SET_SEARCH_THREADS:
      return action.payload.search;
    default:
      return search;
  }
}

export default searchThreadsReducer;
