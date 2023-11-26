/* eslint-disable import/prefer-default-export */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setThreads } from '../threads/action';
import { setUsers } from '../users/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      dispatch(setUsers(users));
      dispatch(setThreads(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  asyncPopulateUsersAndThreads,
};
