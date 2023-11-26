/* eslint-disable no-alert */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
};

function setAuthUser(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUser(authUser));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUnsetAuthUser() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(setAuthUser(null));
      api.putAccessToken('');
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await api.register({ name, email, password });
      alert(response.message);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setAuthUser,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  asyncRegisterUser,
};
