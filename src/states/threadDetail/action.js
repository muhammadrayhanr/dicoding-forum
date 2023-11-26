import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setLoadingThreadDetail } from '../loadingThreadDetail/action';

const ActionType = {
  SET_THREADS_DETAIL: 'SET_THREADS_DETAIL',
  TOGGLE_VOTE_COMMENT: 'TOGGLE_VOTE_COMMENT',
};

function setThreadDetail(thread) {
  return {
    type: ActionType.SET_THREADS_DETAIL,
    payload: {
      thread,
    },
  };
}

function asyncSetThreadsDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(setLoadingThreadDetail(true));
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(setThreadDetail(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
    dispatch(setLoadingThreadDetail(false));
  };
}

function asyncAddComment(threadId, content) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.createComment({ threadId, content });
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(setThreadDetail(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleVoteComment(threadId, commentId, voteType) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.toggleVoteComment(threadId, commentId, voteType);
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(setThreadDetail(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setThreadDetail,
  asyncSetThreadsDetail,
  asyncAddComment,
  asyncToggleVoteComment,
};
