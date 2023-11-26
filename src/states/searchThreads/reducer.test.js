/* eslint-disable no-undef */

//  Skenario Test searchThreadsReducer
//  1. Return initial state jika unknown action
//  2. Return search jika action SET_SEARCH_THREADS

import searchThreadsReducer from './reducer';

describe('searchThreadsReducer function', () => {
  // Scenario 1
  it('Return initial state jika unknown action', () => {
    // arrange
    const initialState = '';
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = searchThreadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  // Scenario 2
  it('Return search jika action SET_SEARCH_THREADS', () => {
    // arrange
    const initialState = '';
    const action = {
      type: 'SET_SEARCH_THREADS',
      payload: {
        search: 'perkenalan',
      },
    };

    // action
    const nextState = searchThreadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.search);
  });
});
