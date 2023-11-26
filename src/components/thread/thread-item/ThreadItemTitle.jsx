import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ThreadItemTitle({ thread, headingClass }) {
  return (
    <Link
      to={`/threads/${thread.id}`}
      title={thread.title}
    >
      <h2
        className={`
          ${headingClass}
          font-bold
        `}
      >
        {thread.title.substr(0, 255)}
        {thread.title.length > 255 ? '...' : ''}
      </h2>
    </Link>
  );
}

ThreadItemTitle.propTypes = {
  thread: PropTypes.oneOfType([PropTypes.object]).isRequired,
  headingClass: PropTypes.string,
};

ThreadItemTitle.defaultProps = {
  headingClass: ' text-xl ',
};

export default ThreadItemTitle;
