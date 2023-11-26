import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import LoadingPage from './components/global/LoadingPage';
import LayoutDatas from './components/layout/LayoutDatas';
import Routes from './routes';
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {
  const {
    isPreload = true,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  return (
    <>
      <div className="fixed w-full top-0 z-20 h-4">
        <LoadingBar />
      </div>
      {
        !isPreload ? (
          <LayoutDatas>
            <Routes />
          </LayoutDatas>
        ) : (
          <LoadingPage />
        )
      }
    </>
  );
}

export default App;
