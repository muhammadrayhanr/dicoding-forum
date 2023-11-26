/* eslint-disable no-undef */

//  Skenario Test localeReducer
//  1. Return initial state jika unknown action
//  2. Return locale jika action SET_LOCALE

import localeReducer from './reducer';

describe('localeReducer function', () => {
  // Scenario 1
  it('Return initial state jika unknown action', () => {
    // arrange
    const initialState = 'id';
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = localeReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  // Scenario 1
  it('Return locale jika action SET_LOCALE', () => {
    // arrange
    const initialState = 'id';
    const action = {
      type: 'SET_LOCALE',
      payload: {
        locale: 'en',
      },
    };

    // action
    const nextState = localeReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.locale);
  });
});
