import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import timeSince from '../../utils/timeSince';
import useLocale from '../../hooks/useLocale';
import ThreadCommentForm from './ThreadCommentForm';
import VoteButton from '../global/VoteButton';

function ThreadCommentList({ thread }) {
  const {
    authUser = null,
  } = useSelector((states) => states);

  const { txtLoginToComment, txtLogin } = useLocale();
  return (
    <div
      className="
        bg-white
        dark:bg-neutral-900
        border
        border-neutral-200
        dark:border-neutral-800
        rounded-md
        mb-2
        p-8
      "
    >
      {
        authUser ? (
          <div
            className="
              flex
              mb-2
            "
          >
            <ThreadCommentForm
              threadId={thread.id}
            />
          </div>
        ) : (
          <div
            className="
              mb-2
              text-center
              p-4
              border
              dark:border-neutral-700
              rounded-lg
            "
          >
            {txtLoginToComment}
            <br />
            <Link
              to="/login"
              className="font-bold border-b"
            >
              {txtLogin}
            </Link>
          </div>
        )
      }

      {thread.comments.map((comment) => (
        <div
          key={comment.id}
          className="
            flex
            mb-2
          "
        >
          <div className="p-2">
            <img
              src={comment.owner.avatar}
              alt=""
              className="
                w-8 h-8
                rounded-full
              "
            />
          </div>
          <div
            className="
              flex-1
              p-2
            "
          >
            <div
              className="
                rounded-md
                border
                p-4
                border-neutral-300
                dark:border-neutral-700
              "
            >
              <p className="mb-4">
                <span
                  className="font-bold"
                >
                  {comment.owner.name}
                </span>
                <span
                  className="
                    text-neutral-500
                    pl-2
                  "
                >
                  •
                  {timeSince(new Date(comment.createdAt))}
                </span>

              </p>

              <div
                className="mb-4"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.content) }}
              />

              <div
                className="flex"
              >
                <VoteButton
                  action="comment"
                  actionId={thread.id}
                  commentId={comment.id}
                  votesBy={comment.upVotesBy}
                  voteType={1}
                />

                <VoteButton
                  action="comment"
                  actionId={thread.id}
                  commentId={comment.id}
                  votesBy={comment.downVotesBy}
                  voteType={-1}
                />
              </div>
            </div>
          </div>

        </div>
      ))}

    </div>
  );
}

ThreadCommentList.propTypes = {
  thread: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ThreadCommentList;
