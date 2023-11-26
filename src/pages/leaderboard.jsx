import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideMenu from '../components/layout/SideMenu';
import useLocale from '../hooks/useLocale';
import { asyncSetLeaderboards } from '../states/leaderboards/action';

export default function IndexPage() {
  const {
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const { txtLeaderboard, txtRefresh } = useLocale();

  const onRefreshLeaderboards = () => {
    dispatch(asyncSetLeaderboards());
  };

  useEffect(() => {
    if (leaderboards.length === 0) {
      dispatch(asyncSetLeaderboards());
    }
  }, [dispatch]);

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
        <div
          className="
            flex
            mb-8
          "
        >
          <h3
            className="
              text-3xl
              font-bold
              px-2
              flex-1
            "
          >
            {txtLeaderboard}
          </h3>
          <button
            type="button"
            onClick={onRefreshLeaderboards}
          >
            {txtRefresh}
          </button>
        </div>
        <ul>
          {
            leaderboards.map((lb, index) => (
              <li
                key={lb.user.id}
                className="
                  flex
                  py-2
                "
              >
                <span
                  className="
                    block
                    py-2
                    px-4
                    text-neutral-500
                  "
                >
                  {index + 1}
                </span>
                <img
                  src={lb.user.avatar}
                  alt={lb.user.name}
                  className="
                    w-10 h-10 rounded-full
                    mr-4
                  "
                />
                <span
                  className="
                    block
                    flex-1
                    py-2
                  "
                >
                  {lb.user.name}

                </span>

                <span
                  className="
                    block
                    text-xl
                    py-1
                    px-4
                  "
                >
                  {lb.score.toLocaleString()}
                </span>

              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
