/* eslint-disable no-undef */

// Skenario Test usersReducer
//  1. Return initial state jika unknown action
//  2. Return users jika action SET_USERS

import usersReducer from './reducer';

describe('usersReducer function', () => {
  // Scenario 1
  it('Return initial state jika unknown action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  // Scenario 2
  it('Return users jika action SET_USERS', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'SET_USERS',
      payload: {
        users: [
          {
            id: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
            name: 'admin@dicoding.com',
            email: 'user-6oWew2w2Wx5xLUTU',
            avatar: 'Dicoding',
          },
        ],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.users);
  });
});
