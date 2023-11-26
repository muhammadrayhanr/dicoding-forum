/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

// Scenario Test Shared Action
//  A. asyncPopulateUsersAndThreads
//     1. Harus dispatch action dengan benar ketika fetching berhasil
//     2. Harus dispatch action dan memunculkan alert dengan benar ketika fetching gagal

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setThreads } from '../threads/action';
import { setUsers } from '../users/action';
import { asyncPopulateUsersAndThreads } from './action';

const fakeThreadsResponse = [
  {
    body: '# jsx-a11y/label-associated-controlan',
    category: 'hooh',
    createdAt: '2022-12-04T08:17:38.100Z',
    downVotesBy: [],
    id: 'thread-acPpqFqvZ47jfpM9',
    ownerId: 'user-ry7WkBEJl2WHUpEy',
    title: 'jsx',
    totalComments: 0,
    upVotesBy: [],
  },
  {
    body: 'haduh',
    category: 'coba lagi',
    createdAt: '2022-12-04T06:55:58.650Z',
    downVotesBy: [],
    id: 'thread-EpPDYN8OhfpZcUSj',
    ownerId: 'user-ry7WkBEJl2WHUpEy',
    title: 'Berikut ini',
    totalComments: 0,
    upVotesBy: [],
  },
];

const fakeUsersResponse = JSON.parse(`
  [
    {
      "id": "user-pdxJSzJgVh61Okxm",
      "name": "testos",
      "email": "testos@gmail.com",
      "avatar": "https://ui-avatars.com/api/?name=testos&background=random"
    }
  ]
`);

const fakeErrorResponse = new Error('Ups, something went wrong');

// A. asyncPopulateUsersAndThreads
describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    // backup original
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    // restore original
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    // delete backup
    delete api._getAllUsers;
    delete api._getAllThreads;
  });

  // Scenario 1
  it('Harus dispatch action dengan benar ketika fetching berhasil', async () => {
    // arrange
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setUsers(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(setThreads(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  // Scenario 2
  it('Harus dispatch action dan memunculkan alert dengan benar ketika fetching gagal', async () => {
    // arrange
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
