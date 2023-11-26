import { ActionType } from './action';

function loadingThreadDetailReducer(loadingThreadDetail = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_LOADING_THREAD_DETAIL:
      return action.payload.loadingThreadDetail;
    default:
      return loadingThreadDetail;
  }
}

export default loadingThreadDetailReducer;
