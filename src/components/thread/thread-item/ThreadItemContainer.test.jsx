/* eslint-disable no-undef */
/**
 * skenario testing ThreadItemContainer
 *    - Render children dengan benar
 *    - Render customClass dengan benar
 */
import { screen, render } from '@testing-library/react';
import React from 'react';
import ThreadItemContainer from './ThreadItemContainer';

describe('ThreadItemContainer Component', () => {
  /**
   * Skenario 1
   */
  it('Render children dengan benar', async () => {
    // Arrange
    render(
      <ThreadItemContainer
        customClass=" w-full mb-4  "
      >
        <p>Example children</p>
      </ThreadItemContainer>,
    );

    // Action

    // Assert
    expect(screen.getByRole('article')).toHaveTextContent('Example children');
  });

  /**
   * Skenario 2
   */
  it('Render customClass dengan benar', async () => {
    // Arrange
    const { container } = render(
      <ThreadItemContainer
        customClass=" w-full mb-4  "
      >
        <p>Example children</p>
      </ThreadItemContainer>,
    );

    // Action

    // Assert
    expect(container.firstChild.classList.contains('w-full')).toBe(true);
    expect(container.firstChild.classList.contains('mb-4')).toBe(true);
  });
});
