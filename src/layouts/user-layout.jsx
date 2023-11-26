import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function UserLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-black dark:text-white">
      <Navbar />
      <main className="pt-24 min-h-screen border-b dark:border-neutral-900">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

UserLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserLayout;
