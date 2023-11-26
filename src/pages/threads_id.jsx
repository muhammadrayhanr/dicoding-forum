import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import NotFoundComp from '../components/global/NotFoundComp';
import SideMenu from '../components/layout/SideMenu';
import ThreadCommentList from '../components/thread/ThreadCommentList';
import ThreadContent from '../components/thread/ThreadContent';
import useLocale from '../hooks/useLocale';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncSetThreadsDetail, setThreadDetail } from '../states/threadDetail/action';

function ThreadsIdPage() {
  const { id } = useParams();
  const {
    threads = [],
    threadDetail = null,
    loadingThreadDetail = true,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const { txtComment } = useLocale();

  useEffect(() => {
    dispatch(asyncSetThreadsDetail(id));
    dispatch(asyncPopulateUsersAndThreads());

    return () => {
      dispatch(setThreadDetail(null));
    };
  }, [id, dispatch]);

  if (!loadingThreadDetail && !threadDetail) {
    return <NotFoundComp />;
  }

  if (loadingThreadDetail && !threadDetail) {
    return null;
  }

  const thread = {
    ...threadDetail,
    categories: threadDetail.category ? [...new Set(threadDetail.category.split(' '))] : [],
    totalComments: threadDetail.comments.length,
  };

  const otherThreadByOwner = threads
    .filter((t) => t.id !== thread.id && t.ownerId === thread.owner.id)
    .map((t) => ({
      id: t.id,
      title: t.title,
    }));

  return (
    <div
      className="
        grid grid-cols-12 gap-4
      "
    >
      <SideMenu />
      <div
        className="
          col-span-12
          lg:col-span-7
        "
      >
        <ThreadContent
          thread={thread}
        />
        <h4
          className="
            text-xl
            font-bold
            py-4
            mt-4
          "
        >
          {thread.comments.length}
          {txtComment}
        </h4>
        <ThreadCommentList
          thread={thread}
        />
      </div>

      <aside
        className="hidden lg:block lg:col-span-3 pr-4"
      >
        <div
          className="
            bg-white
            dark:bg-neutral-900
            border
            border-neutral-200
            dark:border-neutral-800
            rounded-md
            mb-4
            p-4
            text-center
            shadow-sm
          "
        >
          <img
            src={thread.owner.avatar}
            alt=""
            className="
              inline
              w-16 h-16
              rounded-full
            "
          />
          <h4 className="font-bold leading-8">
            {thread.owner.name}
          </h4>
          <p className="text-xs text-neutral-500">
            @
            {thread.owner.id}
          </p>
        </div>

        {otherThreadByOwner.length > 0 ? (
          <div
            className="
              bg-white
              dark:bg-neutral-900
              border
              border-neutral-200
              dark:border-neutral-800
              rounded-md
              mb-2
            "
          >

            <h4 className="p-4 font-bold border-b dark:border-black">
              Other thread by
              {thread.owner.name}
            </h4>
            <ul>
              {otherThreadByOwner.map((t, i) => (
                <li key={t.id}>
                  <Link
                    to={`/threads/${t.id}`}
                    className={`
                      block
                      p-4
                      ${i === otherThreadByOwner.length - 1 ? 'border-b dark:border-black' : ''}
                    `}
                  >
                    {t.title}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        ) : ''}
      </aside>
    </div>
  );
}

export default ThreadsIdPage;
