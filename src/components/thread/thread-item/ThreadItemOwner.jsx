import React from 'react';
import PropTypes from 'prop-types';
import timeSince from '../../../utils/timeSince';

function ThreadItemOwner({ thread }) {
  return (
    <div
      className="
        flex
      "
    >
      <img
        src={thread.owner ? thread.owner.avatar : ''}
        alt={thread.owner ? thread.owner.name : ''}
        className="w-8 h-8 rounded-full mr-4"
      />
      <div>
        <span
          className="
            block
            font-medium
            text-sm
          "
        >
          {thread.owner ? thread.owner.name : ''}
        </span>
        <span
          className="
            block
            text-neutral-500
            dark:text-neutral-500
            text-xs
          "
          title={new Date(thread.createdAt).toLocaleString('en-EN', { dateStyle: 'full', timeStyle: 'short' })}
        >
          {timeSince(new Date(thread.createdAt))}
        </span>
      </div>
    </div>
  );
}

ThreadItemOwner.propTypes = {
  thread: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ThreadItemOwner;
