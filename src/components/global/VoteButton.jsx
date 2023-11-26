import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import {
  AiOutlineLike, AiFillLike,
  AiOutlineDislike, AiFillDislike,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { asyncToggleVoteThread } from '../../states/threads/action';
import useLocale from '../../hooks/useLocale';
import { asyncToggleVoteComment } from '../../states/threadDetail/action';

function VoteButton({
  action, actionId, commentId, votesBy, voteType,
  numberClass, iconClass,
}) {
  const {
    authUser = null,
    users = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const { txtMustLogin, txtLikedBy, txtDislikedBy } = useLocale();

  const votersName = users
    .filter((user) => votesBy.includes(user.id))
    .map((user) => user.name)
    .join(', ');

  const votersText = `${(voteType === 1) ? txtLikedBy : txtDislikedBy} ${votersName.length > 0 ? votersName : '0'}`;

  const loginFirst = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'warning',
      title: txtMustLogin,
    });
  };

  const onVote = () => {
    if (!authUser) {
      loginFirst();
      return false;
    }
    switch (action) {
      case 'thread':
        dispatch(asyncToggleVoteThread(
          actionId,
          authUser.id,
          votesBy.includes(authUser.id) ? 0 : voteType,
          votesBy.includes(authUser.id) ? voteType : 0,
        ));
        break;

      case 'comment':
        dispatch(asyncToggleVoteComment(
          actionId,
          commentId,
          votesBy.includes(authUser.id) ? 0 : voteType,
        ));
        break;

      default:
        break;
    }
    return true;
  };
  return (
    <button
      type="button"
      className="
        mr-4
        flex
      "
      title={votersText}
      onClick={onVote}
    >
      {
        voteType === 1 ? (
          <div>
            {authUser && votesBy.includes(authUser.id) ? (
              <AiFillLike className={` block ${iconClass} text-red-500 `} />
            ) : (
              <AiOutlineLike className={` block ${iconClass} `} />
            )}
          </div>
        ) : (
          <div>
            {authUser && votesBy.includes(authUser.id) ? (
              <AiFillDislike className={` block ${iconClass} text-red-500 `} />
            ) : (
              <AiOutlineDislike className={` block ${iconClass} `} />
            )}
          </div>
        )
      }

      <span
        className={`
          block
          ${authUser && votesBy.includes(authUser.id) ? 'text-red-500' : ''}
          ${numberClass}
        `}
      >
        {votesBy.length.toLocaleString()}
      </span>
    </button>
  );
}

VoteButton.propTypes = {
  action: PropTypes.string.isRequired,
  actionId: PropTypes.string.isRequired,
  commentId: PropTypes.string,
  voteType: PropTypes.number.isRequired,
  votesBy: PropTypes.oneOfType([PropTypes.array]),
  numberClass: PropTypes.string,
  iconClass: PropTypes.string,
};

VoteButton.defaultProps = {
  numberClass: ' pt-1 pl-1 text-xs ',
  iconClass: ' text-lg ',
  votesBy: [],
  commentId: '',
};

export default VoteButton;
