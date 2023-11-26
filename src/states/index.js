import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadsReducer from './threads/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import usersReducer from './users/reducer';
import searchThreadsReducer from './searchThreads/reducer';
import filterThreadCategoryReducer from './filterThreadCategory/reducer';
import threadDetailReducer from './threadDetail/reducer';
import localeReducer from './locale/reducer';
import loadingThreadDetailReducer from './loadingThreadDetail/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    searchThreads: searchThreadsReducer,
    filterThreadCategory: filterThreadCategoryReducer,
    users: usersReducer,
    leaderboards: leaderboardsReducer,
    locale: localeReducer,
    loadingBar: loadingBarReducer,
    loadingThreadDetail: loadingThreadDetailReducer,
  },
});

export default store;
