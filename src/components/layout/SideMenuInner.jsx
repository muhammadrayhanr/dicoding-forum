import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BsHouse,
  BsBarChart,
  BsPlusSquare,
} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import useLocale from '../../hooks/useLocale';

function SideMenuInner() {
  const { pathname } = useLocation();
  const {
    authUser = null,
  } = useSelector((states) => states);
  const {
    txtHome, txtLeaderboard, txtCreateThread,
  } = useLocale();

  const menu = [
    { link: '/', text: txtHome, icon: <BsHouse className="inline-block text-xl mr-2" /> },
    { link: '/leaderboard', text: txtLeaderboard, icon: <BsBarChart className="inline-block text-xl mr-2" /> },
  ];

  return (
    <ul>
      {authUser ? (
        <li className="mb-4">
          <Link
            to="/create-thread"
            className={`
              block
              p-2
              bg-indigo-600
              dark:bg-indigo-900
              text-white
              hover:bg-indigo-500
              hover:dark:bg-indigo-800
              rounded-md
              ${pathname === '/' ? 'bg-indigo-500 dark:bg-indigo-800' : ''}
            `}
          >
            <BsPlusSquare className="inline-block text-xl mr-2" />
            {txtCreateThread}
          </Link>
        </li>
      ) : ''}

      {menu.map((m) => (
        <li key={m.text}>
          <Link
            to={m.link}
            className={`
              block
              p-2
              hover:bg-neutral-200
              hover:dark:bg-neutral-900
              rounded-md
              ${m.link === pathname ? 'bg-neutral-200 dark:bg-neutral-900' : ''}
            `}
          >
            {m.icon}
            {m.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SideMenuInner;
