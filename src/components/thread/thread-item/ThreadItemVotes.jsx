import React from 'react';
import PropTypes from 'prop-types';

import {
  AiOutlineComment,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import VoteButton from '../../global/VoteButton';

function ThreadItemVotes({
  thread, isUpVote, isDownVote, isComment,
  iconClass, numberClass,
}) {
  const navigate = useNavigate();

  const onClickComment = () => {
    navigate(`/threads/${thread.id}`);
  };

  return (
    <div className="mt-2 flex">
      {isUpVote ? (
        <VoteButton
          action="thread"
          actionId={thread.id}
          votesBy={thread.upVotesBy}
          voteType={1}
          numberClass={numberClass}
          iconClass={iconClass}
        />
      ) : ''}

      {isDownVote ? (
        <VoteButton
          action="thread"
          actionId={thread.id}
          votesBy={thread.downVotesBy}
          voteType={-1}
          numberClass={numberClass}
          iconClass={iconClass}
        />
      ) : ''}

      {isComment ? (
        <button
          type="button"
          className="
            mr-4
            flex
          "
          onClick={onClickComment}
        >
          <AiOutlineComment className={` block ${iconClass} `} />

          <span
            className={`
              block
              ${numberClass}
            `}
          >
            {thread.totalComments.toLocaleString()}
          </span>
        </button>
      ) : ''}

    </div>
  );
}

ThreadItemVotes.propTypes = {
  thread: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isUpVote: PropTypes.bool,
  isDownVote: PropTypes.bool,
  isComment: PropTypes.bool,
  iconClass: PropTypes.string,
  numberClass: PropTypes.string,
};

ThreadItemVotes.defaultProps = {
  isUpVote: true,
  isDownVote: true,
  isComment: true,
  iconClass: ' text-lg ',
  numberClass: ' pt-1 pl-1 text-xs ',
};

export default ThreadItemVotes;
