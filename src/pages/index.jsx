import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideCategories from '../components/layout/SideCategories';
import SideMenu from '../components/layout/SideMenu';
import ThreadList from '../components/thread/ThreadList';
import useLocale from '../hooks/useLocale';
import { setFilterThreadCategory } from '../states/filterThreadCategory/action';
import { setSearchThreads } from '../states/searchThreads/action';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

export default function IndexPage() {
  const {
    threads = [],
    searchThreads = '',
    filterThreadCategory = '',
    users = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const {
    txtClearFilter, txtShowResultFor, txtShowResultCategory, txtShowResultQuery,
  } = useLocale();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onClearFilter = () => {
    dispatch(setFilterThreadCategory(''));
    dispatch(setSearchThreads(''));
  };

  const threadList = threads
    .filter((thread) => thread.title.toLowerCase().includes(searchThreads.toLowerCase()))
    .map((thread) => ({
      ...thread,
      categories: thread.category ? [...new Set(thread.category.split(' '))] : [],
      owner: users.find((user) => user.id === thread.ownerId),
    }))
    .filter((thread) => (filterThreadCategory !== '' ? thread.categories.includes(filterThreadCategory) : thread));

  return (
    <div
      className="
        grid grid-cols-12 gap-4
      "
    >
      <SideMenu />
      <section
        className="
          col-span-12
          lg:col-span-7
        "
      >
        {filterThreadCategory !== '' || searchThreads !== '' ? (
          <div id="txt-info-filter" className="flex">
            <p className="flex-1 mb-2 px-2">
              {txtShowResultFor}
              {' '}
              {filterThreadCategory !== '' ? `${txtShowResultCategory} "${filterThreadCategory}"` : ''}
              {filterThreadCategory !== '' && searchThreads !== '' ? ', ' : ''}
              {searchThreads !== '' ? `${txtShowResultQuery} "${searchThreads}"` : ''}
            </p>
            <div>
              <button
                type="button"
                onClick={onClearFilter}
              >
                {txtClearFilter}
              </button>
            </div>
          </div>
        ) : ''}

        {
          threadList.length > 0 ? (
            <ThreadList
              threads={threadList}
            />
          ) : (
            <div
              className="
                p-4
                rounded-md
                shadow-sm
                border
                border-neutral-200
                dark:border-neutral-800
                bg-white
                dark:bg-neutral-900
                text-center
              "
            >
              Tidak ada thread
            </div>
          )
        }

      </section>
      <SideCategories />
    </div>
  );
}
