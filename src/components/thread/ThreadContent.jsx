import React from 'react';
import PropTypes from 'prop-types';
import ThreadItemContainer from './thread-item/ThreadItemContainer';
import ThreadItemOwner from './thread-item/ThreadItemOwner';
import ThreadItemTitle from './thread-item/ThreadItemTitle';
import ThreadItemCategories from './thread-item/ThreadItemCategories';
import ThreadItemContent from './thread-item/ThreadItemContent';
import ThreadItemVotes from './thread-item/ThreadItemVotes';

function ThreadContent({ thread }) {
  return (
    <ThreadItemContainer customClass=" p-8 ">
      <>
        <ThreadItemOwner thread={thread} />
        <div className="py-4">
          <ThreadItemTitle thread={thread} headingClass=" text-4xl leading-normal " />
        </div>

        <ThreadItemCategories thread={thread} />

        <ThreadItemContent thread={thread} customClass=" pt-4 " />

        <ThreadItemVotes
          thread={thread}
          isComment={false}
          iconClass=" text-2xl "
          numberClass=" pl-2 text-base "
        />
      </>
    </ThreadItemContainer>
  );
}

ThreadContent.propTypes = {
  thread: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ThreadContent;
