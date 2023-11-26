/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

// Scenario yang diharapkan
// 1. asyncSetAuthUser
// - Harus dispatch action dengan baik ketika fetching berhasil
// - Harus dispatch action dan memunculkan alert dengan baik ketika fetching gagal
// 2. asyncUnsetAuthUser
// - Harus dispatch action dengan baik ketika fetching berhasil
// - Harus dispatch action dan memunculkan alert dengan baik ketika fetching gagal
// 3. asyncRegisterUser
// - Harus dispatch action dengan baik ketika fetching berhasil
// - Harus dispatch action dan memunculkan alert dengan baik ketika fetching gagal

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  asyncRegisterUser, asyncSetAuthUser, asyncUnsetAuthUser, setAuthUser,
} from './action';

const fakeLoginResponse = JSON.parse('{"status":"success","message":"user logged in","data":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItNnZ0YWpUdHVvNEt0a3A0ciIsImlhdCI6MTY3MDY3MDQ5N30.3Tq_Hz-slVXxfSngjC8jY3U6F6942I9viHhsagCZJtI"}}').data.token;

const fakeGetProfileResponse = JSON.parse('{"status":"success","message":"user retrieved","data":{"user":{"id":"user-6vtajTtuo4Ktkp4r","name":"dev","email":"dev@gmail.com","avatar":"https://ui-avatars.com/api/?name=dev&background=random"}}}').data.user;

const fakeRegisterResponse = JSON.parse('{"status":"success","message":"user created","data":{"user":{"id":"user-ka2kmHHcmLKuUmyk","name":"123","email":"123@gmail.com","avatar":"https://ui-avatars.com/api/?name=123&background=random"}}}').data.user;

const fakeErrorResponse = new Error('Ups, something went wrong');

// 1. asyncSetAuthUser
describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    // backup original
    api._login = api.login;
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    // restore original
    api.login = api._login;
    api.getOwnProfile = api._getOwnProfile;

    // delete backup
    delete api._login;
    delete api._getOwnProfile;
  });

  // Scenario 1
  it('Harus dispatch action dengan benar ketika fetching berhasil', async () => {
    // arrange
    api.login = () => Promise.resolve(fakeLoginResponse);
    api.getOwnProfile = () => Promise.resolve(fakeGetProfileResponse);

    // mock dispatch
    const dispatch = jest.fn();
    api.putAccessToken = jest.fn();

    // action
    await asyncSetAuthUser({ email: 'bakaa@email.com', password: 'password' })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUser(fakeGetProfileResponse));
    expect(api.putAccessToken).toHaveBeenCalledWith(fakeLoginResponse);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  // Scenario 2
  it('Harus dispatch action dan memunculkan alert dengan benar ketika fetching gagal', async () => {
    // arrange
    api.login = () => Promise.reject(fakeErrorResponse);
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncSetAuthUser({ email: 'bakaa@email.com', password: 'password' })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

// 2. asyncUnsetAuthUser
describe('asyncUnsetAuthUser thunk', () => {
  // Scenario 1
  it('Harus dispatch action dengan benar ketika fetching berhasil', async () => {
    // mock dispatch
    const dispatch = jest.fn();
    api.putAccessToken = jest.fn();

    // action
    await asyncUnsetAuthUser()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUser(null));
    expect(api.putAccessToken).toHaveBeenCalledWith('');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  // Scenario 2
  it('Harus dispatch action dan memunculkan alert dengan benar ketika fetching gagal', async () => {
    // arrange
    api.login = () => Promise.reject(fakeErrorResponse);
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncSetAuthUser({ email: 'bakaa@email.com', password: 'password' })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

// 3. asyncRegisterUser
describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    // backup original
    api._register = api.register;
  });

  afterEach(() => {
    // restore original
    api.register = api._register;

    // delete backup
    delete api._register;
  });

  // Scenario 1
  it('Harus dispatch action dengan benar ketika fetching berhasil', async () => {
    // arrange
    api.register = () => Promise.resolve(fakeRegisterResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncRegisterUser({
      email: 'petrikahayde@gmail.com',
      name: 'ahayde',
      password: 'password',
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  // Scenario 2
  it('Harus dispatch action dan memunculkan alert dengan benar ketika fetching gagal', async () => {
    // arrange
    api.register = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncRegisterUser({
      email: 'petrikahayde@gmail.com',
      name: 'ahayde',
      password: 'password',
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
