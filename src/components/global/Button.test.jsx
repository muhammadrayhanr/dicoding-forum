/* eslint-disable no-undef */

//  Scenario Test ButtonComp
//  - Menampilkan teks sesuai dengan prop btnText
//  - Render tipe button sesuai dengan prop btnType
//  - Render class color button sesuai dengan prop btnColor
//  - Render tambahan class sesuai dengan prop btnClass
//  - Render size button sesuai dengan prop btnSize

import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  // Scenario 1
  it('Menampilkan teks sesuai dengan prop btnText', async () => {
    // Arrange
    render(
      <Button
        btnText="Publish"
        btnType="button"
        btnColor="indigo"
        btnSize="sm"
        btnClass=" mb-2 mr-2 "
      />,
    );

    // Action
    await screen.findByRole('button');

    // Assert
    expect(screen.getByRole('button')).toHaveTextContent('Publish');
  });

  // Scenario 2
  it('Render tipe button sesuai dengan prop btnType', async () => {
    // Arrange
    render(
      <Button
        btnText="Publish"
        btnType="button"
        btnColor="indigo"
        btnSize="sm"
        btnClass=" mb-2 mr-2 "
      />,
    );

    // Action
    await screen.findByRole('button');

    // Assert
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  // Scenario 3
  it('Render class color button sesuai dengan prop btnColor', async () => {
    // Arrange
    const { container } = render(
      <Button
        btnText="Publish"
        btnType="button"
        btnColor="indigo"
        btnSize="sm"
        btnClass=" mb-2 mr-2 "
      />,
    );

    // Action
    await screen.findByRole('button');

    // Assert
    expect(container.firstChild.classList.contains('bg-indigo-600')).toBe(true);
    expect(container.firstChild.classList.contains('dark:bg-indigo-900')).toBe(true);
    expect(container.firstChild.classList.contains('hover:bg-indigo-500')).toBe(true);
    expect(container.firstChild.classList.contains('dark:hover:bg-indigo-800')).toBe(true);
    expect(container.firstChild.classList.contains('focus:ring-indigo-500')).toBe(true);
  });

  // Scenario 4
  it('Render tambahan class sesuai dengan prop btnClass', async () => {
    // Arrange
    const { container } = render(
      <Button
        btnText="Publish"
        btnType="button"
        btnColor="indigo"
        btnSize="sm"
        btnClass=" mb-2 mr-2 "
      />,
    );

    // Action
    await screen.findByRole('button');

    // Assert
    expect(container.firstChild.classList.contains('mb-2')).toBe(true);
    expect(container.firstChild.classList.contains('mr-2')).toBe(true);
  });

  // Scenario 5
  it('Render size button sesuai dengan prop btnSize', async () => {
    // Arrange
    const { container } = render(
      <Button
        btnText="Publish"
        btnType="button"
        btnColor="indigo"
        btnSize="sm"
        btnClass=" mb-2 mr-2 "
      />,
    );

    // Action
    await screen.findByRole('button');

    // Assert
    expect(container.firstChild.classList.contains('text-xs')).toBe(true);
  });
});
