/* eslint-disable no-undef */

//  Skenario Test threadDetailReducer
//  1. Return initial state jika unknown action
//  2. Return thread detail jika action SET_THREADS_DETAIL

import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  // Scenario 1
  it('Return initial state jika unknown action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  // Scenario 2
  it('Return thread detail jika action SET_THREADS_DETAIL', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'SET_THREADS_DETAIL',
      payload: {
        thread: {
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
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.thread);
  });
});
