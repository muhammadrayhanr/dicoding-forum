/* eslint-disable no-undef */

//  Skenario Test authUserReducer
//  1. Return initial state jika unknown action
//  2. Return authUser jika action SET_AUTH_USER

import authUserReducer from './reducer';

describe('authUser function', () => {
  // Scenario 1
  it('Return initial state jika unknown action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  // Scenario 2
  it('Return authUser jika action SET_AUTH_USER', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: JSON.parse(`
          {
            "id": "user-pdxJSzJgVh61Okxm",
            "name": "tes123",
            "email": "tes123@gmail.com",
            "avatar": "https://ui-avatars.com/api/?name=tes123&background=random"
          }
         `),
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });
});
