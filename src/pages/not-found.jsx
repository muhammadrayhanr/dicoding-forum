import React from 'react';
import NotFoundComp from '../components/global/NotFoundComp';
import ThemeToggler from '../components/layout/ThemeToggler';

export default function IndexPage() {
  return (
    <div
      className="
        min-h-screen
        bg-neutral-100
        dark:bg-black
        dark:text-white
        pt-16
      "
    >
      <NotFoundComp />

      <div className="hidden">
        <ThemeToggler />
      </div>
    </div>
  );
}
