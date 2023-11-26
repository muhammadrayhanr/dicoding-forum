/* eslint-disable no-undef */

//  Skenario Test filterThreadCategoryReducer
//  1. Return initial state jika unknown action
//  2. Return category jika action SET_FILTER_THREAD_CATEGORY

import filterThreadCategoryReducer from './reducer';

describe('filterThreadCategoryReducer function', () => {
  // Scenario 1
  it('Return initial state jika unknown action', () => {
    // arrange
    const initialState = '';
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = filterThreadCategoryReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  // Scenario 2
  it('Return category jika action SET_FILTER_THREAD_CATEGORY', () => {
    // arrange
    const initialState = '';
    const action = {
      type: 'SET_FILTER_THREAD_CATEGORY',
      payload: {
        category: 'react',
      },
    };

    // action
    const nextState = filterThreadCategoryReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.category);
  });
});
