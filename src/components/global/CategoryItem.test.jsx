/* eslint-disable no-undef */

// Scenario Test CategoryItem
// - Menampilkan teks kategori dengan # didepannya sesuai dengan prop name
// - Menampilkan teks kategori tidak lebih dari 50 karakter
// - Font bold dan underline ketika kategori aktif, dari prop isActive = true
// - Jika diklik state filterThreadCategory berubah sesuai prop name

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import CategoryItem from './CategoryItem';
import store from '../../states';

describe('CategoryItem Component', () => {
  // Scenario 1
  it('Menampilkan teks kategori dengan # didepannya sesuai dengan prop name', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <CategoryItem
          name="react-js"
        />
      </Provider>,
    );

    // Action
    await screen.findByRole('button');

    // Assert
    expect(screen.getByRole('button')).toHaveTextContent('#react-js');
  });

  // Scenario 2
  it('Menampilkan teks kategori tidak lebih dari 50 karakter', async () => {
    // Arrange
    const nameProp = 'testing-name-prop-untuk-menampilkan-teks-kategori-tidak-lebih-dari-50-karakter';
    render(
      <Provider store={store}>
        <CategoryItem
          name={nameProp}
        />
      </Provider>,
    );

    // Action
    await screen.findByRole('button');

    // Assert
    const truncatedText = nameProp.substring(0, 50);
    expect(screen.getByRole('button')).toHaveTextContent(`#${truncatedText}`);
  });

  // Scenario 3
  it('Font bold dan underline ketika kategori aktif, dari prop isActive = true', async () => {
    // Arrange
    const { container } = render(
      <Provider store={store}>
        <CategoryItem
          isActive
          name="react-js"
        />
      </Provider>,
    );

    // Action
    await screen.findByRole('button');

    // Assert
    expect(container.firstChild.classList.contains('font-bold')).toBe(true);
    expect(container.firstChild.classList.contains('underline')).toBe(true);
  });

  // Scenario 4
  it('Jika diklik state filterThreadCategory berubah sesuai prop name', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <CategoryItem
          name="react-js"
        />
      </Provider>,
    );
    const button = await screen.getByRole('button');

    // Action
    await userEvent.click(button);
    const { filterThreadCategory } = store.getState();

    // Assert
    expect(filterThreadCategory).toBe('react-js');
  });
});
