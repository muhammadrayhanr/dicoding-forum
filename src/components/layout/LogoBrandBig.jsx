import React from 'react';
import { Link } from 'react-router-dom';

function LogoBrandBig() {
  return (
    <header>
      <Link to="/">
        <span className="block mx-auto text-center border-4 border-black dark:border-white font-semibold text-5xl py-3">Dicoding Forum</span>
        <div className="my-4" />
      </Link>
    </header>
  );
}

export default LogoBrandBig;
