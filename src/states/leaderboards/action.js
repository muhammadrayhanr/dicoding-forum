import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_LEADERBOARDS: 'SET_LEADERBOARDS',
};

function setLeaderboards(leaderboards) {
  return {
    type: ActionType.SET_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncSetLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboards();
      dispatch(setLeaderboards(leaderboards));
    } catch (error) {
      //
    }
    setTimeout(() => {
      dispatch(hideLoading());
    }, 1000);
  };
}

export { ActionType, setLeaderboards, asyncSetLeaderboards };
