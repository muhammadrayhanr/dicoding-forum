const ActionType = {
  SET_LOADING_THREAD_DETAIL: 'SET_LOADING_THREAD_DETAIL',
};

function setLoadingThreadDetail(loadingThreadDetail) {
  return {
    type: ActionType.SET_LOADING_THREAD_DETAIL,
    payload: {
      loadingThreadDetail,
    },
  };
}

export {
  ActionType,
  setLoadingThreadDetail,
};
