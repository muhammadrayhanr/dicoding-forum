/* eslint-disable no-undef */

//  Skenario Test leaderboardsReducer
//  1. Return initial state jika unknown action
//  2. Return category jika action SET_LEADERBOARDS

import leaderboardsReducer from './reducer';

describe('leaderboardsReducer function', () => {
  // Scenario 1
  it('Return initial state jika unknown action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  // Scenario 2
  it('Return leaderboards jika action SET_LEADERBOARDS', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'SET_LEADERBOARDS',
      payload: {
        leaderboards: JSON.parse(`
        [
          {
            "user": {
              "id": "user-Pl6LEeHlzT63OHED",
              "name": "belajarreduxsgakbisaT_T",
              "email": "bebehrayhan@gmail.com",
              "avatar": "https://ui-avatars.com/api/?name=belajarreduxgakbisaT_T&background=random"
            },
            "score": 490
          },
          {
            "user": {
              "id": "user-hETtb6Vs84Ty1oMK",
              "name": "Hilih",
              "email": "hilih@mail.com",
              "avatar": "https://ui-avatars.com/api/?name=Hilih&background=random"
            },
            "score": 470
          }
        ]`),
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
