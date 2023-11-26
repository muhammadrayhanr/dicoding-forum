import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BsList,
  BsTags,
  BsSearch,
  BsArrowLeft,
  BsArrowRight,
  BsX,
} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import ThemeToggler from './ThemeToggler';
import NavbarUserProfile from './NavbarUserProfile';
import LogoBrand from '../global/LogoBrand';
import { setSearchThreads } from '../../states/searchThreads/action';
import useInput from '../../hooks/useInput';
import LangToggler from './LangToggler';
import SideMenuInner from './SideMenuInner';
import SideCategoriesInner from './SideCategoriesInner';

function Navbar() {
  const {
    searchThreads = '',
  } = useSelector((states) => states);

  const [search, setSearch] = useInput('');

  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const dispatch = useDispatch();

  const onSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchThreads(search));
  };

  useEffect(() => {
    document.getElementById('search-input').value = searchThreads;
  }, [searchThreads]);
  return (
    <nav className="w-full fixed z-10 bg-white shadow-sm dark:bg-black border-b dark:border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-3 lg:col-span-2 flex">
          <button
            type="button"
            id="btn-toggle-side-menu"
            aria-label="Toggle"
            className="
              text-xl
              block
              lg:hidden
              p-4
            "
            onClick={() => setShowSideMenu(true)}
          >
            <BsList />
          </button>
          <Link
            to="/"
            title="Dicoding Forum"
            className="
              pl-0
              lg:pl-4
              py-4
              pr-4
            "
          >
            <LogoBrand />
          </Link>
        </div>

        <div className="hidden lg:block col-span-7 py-4 relative">
          <form onSubmit={onSubmitSearch}>
            <input
              id="search-input"
              type="text"
              className="
                t-form
                border-0
                bg-neutral-200
                dark:bg-neutral-900
              "
              placeholder="Search"
              onChange={setSearch}
            />
          </form>
          <button
            type="button"
            aria-label="Button"
            className="
              absolute
              top-6
              right-4
            "
          >
            <BsSearch />
          </button>
        </div>
        <div
          className="
            col-span-9
            lg:col-span-3
            p-4
            flex
            justify-end
          "
        >
          <button
            type="button"
            title="Search"
            aria-label="Search"
            className="
              block
              lg:hidden
              w-8
              h-8
              rounded-full
              bg-neutral-200
              dark:bg-neutral-900
              text-center
              mr-2
            "
            onClick={() => setShowSearchBar(true)}
          >
            <BsSearch className="inline" />
          </button>

          <button
            type="button"
            id="btn-toggle-side-categories"
            title="Tags"
            aria-label="Tags"
            className="
              block
              lg:hidden
              w-8
              h-8
              rounded-full
              bg-neutral-200
              dark:bg-neutral-900
              text-center
              mr-2
            "
            onClick={() => setShowCategoryMenu(true)}
          >
            <BsTags className="inline" />
          </button>
          <LangToggler />
          <ThemeToggler />
          <NavbarUserProfile />
        </div>
      </div>

      {
        showSideMenu ? (
          <div
            id="fixed-side-menu"
            className="
              w-80
              fixed
              top-0
              h-screen
              bg-white
              dark:bg-black
              p-4
              shadow-lg
              border-r
              dark:border-neutral-900
            "
          >
            <button
              type="button"
              id="btn-close-side-menu"
              aria-label="Toggle"
              className="
                py-4
              "
              onClick={() => setShowSideMenu(false)}
            >
              <BsArrowLeft className="w-6 h-6" />
            </button>
            <SideMenuInner />
          </div>
        ) : ''
      }

      {
        showSearchBar ? (
          <div
            className="
              fixed
              top-0
              w-full
              bg-white
              dark:bg-black
              p-4
              flex
              shadow-lg
              border-b
              dark:border-neutral-900
            "
          >
            <div className="flex-1 relative">
              <form onSubmit={onSubmitSearch}>
                <input
                  id="search-input"
                  type="text"
                  className="
                    t-form
                    border-0
                    bg-neutral-200
                    dark:bg-neutral-900
                  "
                  placeholder="Type and hit enter"
                  onChange={setSearch}
                />
              </form>
              <button
                type="button"
                aria-label="Button"
                className="
                  absolute
                  top-2
                  right-4
                "
              >
                <BsSearch />
              </button>
            </div>
            <div>
              <button
                type="button"
                aria-label="Button"
                className="p-2"
                onClick={() => setShowSearchBar(false)}
              >
                <BsX className="w-6 h-6" />
              </button>
            </div>
          </div>
        ) : ''
      }

      {
        showCategoryMenu ? (
          <div
            id="fixed-side-categories"
            className="
              w-80
              fixed
              top-0
              right-0
              h-screen
              bg-white
              dark:bg-black
              p-4
              overflow-auto
              shadow-lg
              border-l
              dark:border-neutral-900
            "
          >
            <button
              type="button"
              id="btn-close-side-categories"
              aria-label="Toggle"
              className="
                  py-4
                "
              onClick={() => setShowCategoryMenu(false)}
            >
              <BsArrowRight className="w-6 h-6" />
            </button>
            <SideCategoriesInner />
          </div>
        ) : ''
      }
    </nav>
  );
}

export default Navbar;
