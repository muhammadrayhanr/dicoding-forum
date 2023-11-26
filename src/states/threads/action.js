/* eslint-disable no-alert */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncSetThreadsDetail, setThreadDetail } from '../threadDetail/action';

const ActionType = {
  SET_THREADS: 'SET_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_VOTE_THREAD: 'TOGGLE_VOTE_THREAD',
};

function setThreads(threads) {
  return {
    type: ActionType.SET_THREADS,
    payload: {
      threads,
    },
  };
}

function addThread(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleVoteThread({ threadId, userId, voteType }) {
  return {
    type: ActionType.TOGGLE_VOTE_THREAD,
    payload: {
      threadId,
      userId,
      voteType,
    },
  };
}

function asyncAddThread({ body, category, title }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ body, category, title });
      dispatch(addThread(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleVoteThread(threadId, userId, voteType, voteTypeBefore) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    dispatch(toggleVoteThread({ threadId, userId, voteType }));

    const { threads, threadDetail } = getState();
    if (threadDetail) {
      const findThread = threads.find((thread) => thread.id === threadId);
      dispatch(setThreadDetail({
        ...findThread,
        comments: threadDetail.comments,
        owner: threadDetail.owner,
      }));
    }

    try {
      await api.toggleVoteThread(threadId, voteType);
      if (threadDetail) {
        dispatch(asyncSetThreadsDetail(threadId));
      }
    } catch (error) {
      alert(error.message);
      dispatch(toggleVoteThread({ threadId, userId, voteTypeBefore }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setThreads,
  asyncAddThread,
  asyncToggleVoteThread,
};
