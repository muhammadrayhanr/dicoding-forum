import React from 'react';
import PropTypes from 'prop-types';

function NoLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-black dark:text-white">
      {children}
    </div>
  );
}

NoLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default NoLayout;
