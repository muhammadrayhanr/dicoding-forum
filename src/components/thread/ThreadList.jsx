import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadList({ threads }) {
  return (
    <div>
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          thread={thread}
        />
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default ThreadList;
