import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundComp() {
  return (
    <div className="text-center">
      <p className="text-7xl font-bold">404</p>
      <p className="text-xl my-4">Halaman gak ketemu :/</p>
      <p className="text-center">
        <Link to="/">Balik ke Beranda</Link>
      </p>
    </div>
  );
}

export default NotFoundComp;
