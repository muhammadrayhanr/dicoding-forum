/* eslint-disable no-undef */

//  Skenario Test loadingThreadDetailReducer
//  1. Return initial state jika unknown action
//  2. Return loadingThreadDetail jika action SET_LOADING_THREAD_DETAIL

import loadingThreadDetailReducer from './reducer';

describe('loadingThreadDetail function', () => {
  // Scenario 1
  it('Return initial state jika unknown action', () => {
    // arrange
    const initialState = true;
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = loadingThreadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  // Scenario 2
  it('Return loadingThreadDetail jika action SET_LOADING_THREAD_DETAIL', () => {
    // arrange
    const initialState = true;
    const action = {
      type: 'SET_LOADING_THREAD_DETAIL',
      payload: {
        loadingThreadDetail: false,
      },
    };

    // action
    const nextState = loadingThreadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.loadingThreadDetail);
  });
});
