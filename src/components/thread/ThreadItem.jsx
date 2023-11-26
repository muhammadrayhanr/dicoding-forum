import React from 'react';
import PropTypes from 'prop-types';

import ThreadItemContainer from './thread-item/ThreadItemContainer';
import ThreadItemOwner from './thread-item/ThreadItemOwner';
import ThreadItemTitle from './thread-item/ThreadItemTitle';
import ThreadItemCategories from './thread-item/ThreadItemCategories';
import ThreadItemVotes from './thread-item/ThreadItemVotes';

function ThreadItem({ thread }) {
  return (
    <ThreadItemContainer>
      <>
        <ThreadItemOwner thread={thread} />

        <div
          className="
            pl-12
            pt-2
          "
        >
          <ThreadItemTitle thread={thread} />

          <ThreadItemCategories thread={thread} />

          <ThreadItemVotes thread={thread} />
        </div>
      </>
    </ThreadItemContainer>
  );
}

ThreadItem.propTypes = {
  thread: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ThreadItem;
