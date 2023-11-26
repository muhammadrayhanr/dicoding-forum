import React from 'react';
import PropTypes from 'prop-types';
import { matchRoutes, useLocation } from 'react-router-dom';
import UserLayout from '../../layouts/user-layout';
import NoLayout from '../../layouts/no-layout';
import router from '../../routes/router';

function LayoutDatas({ children }) {
  const dataLayout = [
    { path: '/', layout: 'user' },
    { path: '/create-thread', layout: 'user' },
    { path: '/threads/:id', layout: 'user' },
    { path: '/leaderboard', layout: 'user' },
    { path: '/profile', layout: 'user' },
  ];
  const location = useLocation();
  const [{ route }] = matchRoutes(router, location);
  const findLayout = dataLayout.find((layout) => layout.path === route.path);

  if (findLayout) {
    switch (findLayout.layout) {
      case 'user':
        return (
          <UserLayout>
            {children}
          </UserLayout>
        );
      case 'no':
        return (
          <NoLayout>
            {children}
          </NoLayout>
        );
      default:
        return (
          <NoLayout>
            {children}
          </NoLayout>
        );
    }
  }
  return (
    <NoLayout>
      {children}
    </NoLayout>
  );
}

LayoutDatas.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutDatas;
