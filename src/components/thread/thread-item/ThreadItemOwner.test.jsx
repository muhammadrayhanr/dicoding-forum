/* eslint-disable no-undef */
/**
 * skenario testing ThreadItemOwner
 *    - Menampilkan source gambar avatar owner dari prop thread.owner.avatar
 *    - Menampilkan waktu buat thread dengan format timeSince
 */
import { render } from '@testing-library/react';
import React from 'react';
import timeSince from '../../../utils/timeSince';
import ThreadItemOwner from './ThreadItemOwner';

describe('ThreadItemOwner Component', () => {
  /**
   * Skenario 1
   */
  it('Menampilkan source gambar avatar owner dari prop thread.owner.avatar', async () => {
    // Arrange
    const { container } = render(
      <ThreadItemOwner
        thread={{
          owner: {
            name: 'John',
            avatar: 'https://ui-avatars.com/api/?name=John&background=random',
          },
          createdAt: '2022-11-13T09:59:31.019Z',
        }}
      />,
    );
    const img = container.querySelector('img');

    // Action

    // Assert
    expect(img).toHaveAttribute('src', 'https://ui-avatars.com/api/?name=John&background=random');
  });

  /**
   * Skenario 2
   */
  it('Menampilkan waktu buat thread dengan format timeSince', async () => {
    // Arrange
    const createdAt = '2022-11-13T09:59:31.019Z';
    const createdAtTimeSince = timeSince(new Date(createdAt));
    const { container } = render(
      <ThreadItemOwner
        thread={{
          owner: {
            name: 'John',
            avatar: 'https://ui-avatars.com/api/?name=John&background=random',
          },
          createdAt,
        }}
      />,
    );
    const span = container.querySelectorAll('span');

    // Action

    // Assert
    expect(span[1]).toHaveTextContent(createdAtTimeSince);
  });
});
