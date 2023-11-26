import React from 'react';
import PropTypes from 'prop-types';

function ThreadItemContainer({ children, customClass }) {
  return (
    <article
      className={`
        bg-white
        dark:bg-neutral-900
        border
        border-neutral-200
        dark:border-neutral-800
        rounded-md
        mb-2
        shadow-sm
        ${customClass}
      `}

    >
      {children}
    </article>
  );
}

ThreadItemContainer.propTypes = {
  children: PropTypes.element.isRequired,
  customClass: PropTypes.string,
};

ThreadItemContainer.defaultProps = {
  customClass: ' p-4 ',
};

export default ThreadItemContainer;
