/* eslint-disable no-undef */
/**
 * skenario testing ThreadItemCategories
 *    - Render list kategori sesuai prop thread.categories
 */
import { screen, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import ThreadItemCategories from './ThreadItemCategories';
import store from '../../../states';

describe('ThreadItemCategories Component', () => {
  /**
   * Skenario 1
   */
  it('Render children dengan benar', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <ThreadItemCategories
          thread={{
            categories: ['react-js', 'tutorial', 'dicoding'],
          }}
        />
      </Provider>,
    );

    // Action

    // Assert
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('react-js');
    expect(screen.getAllByRole('button')[1]).toHaveTextContent('tutorial');
    expect(screen.getAllByRole('button')[2]).toHaveTextContent('dicoding');
  });
});
