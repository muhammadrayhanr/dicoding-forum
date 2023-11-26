const ActionType = {
  SET_SEARCH_THREADS: 'SET_SEARCH_THREADS',
};

function setSearchThreads(search) {
  return {
    type: ActionType.SET_SEARCH_THREADS,
    payload: {
      search,
    },
  };
}

export {
  ActionType,
  setSearchThreads,
};
