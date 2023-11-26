/* eslint-disable no-undef */

//  Skenario Test isPreloadReducer
//  1. Return initial state jika unknown action
//  2. Return isPreload jika action SET_IS_PRELOAD

import isPreloadReducer from './reducer';

describe('isPreloadReducer function', () => {
  // Scenario 1
  it('Return initial state jika unknown action', () => {
    // arrange
    const initialState = true;
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = isPreloadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  // Scenario 2
  it('Return isPreload jika action SET_IS_PRELOAD', () => {
    // arrange
    const initialState = true;
    const action = {
      type: 'SET_IS_PRELOAD',
      payload: {
        isPreload: false,
      },
    };

    // action
    const nextState = isPreloadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.isPreload);
  });
});
