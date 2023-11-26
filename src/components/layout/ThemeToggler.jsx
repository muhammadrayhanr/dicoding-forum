import React, { useEffect } from 'react';
import {
  BsMoonStars,
  BsSun,
} from 'react-icons/bs';
import useTheme from '../../hooks/useTheme';

function ThemeToggler() {
  const [theme, changeTheme] = useTheme();

  useEffect(() => {
    if (localStorage.theme) {
      changeTheme(localStorage.theme);
    } else {
      localStorage.setItem('theme', 'dark');
      changeTheme('dark');
    }
  }, []);

  return (
    <button
      type="button"
      title="Toggle Theme"
      className="
        block
        w-8
        h-8
        rounded-full
        bg-neutral-200
        dark:bg-neutral-900
        text-center
        mr-2
      "
      onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {
        theme === 'dark' ? (
          <BsMoonStars className="inline" />
        ) : (
          <BsSun className="inline" />
        )
      }
    </button>
  );
}

export default ThemeToggler;
