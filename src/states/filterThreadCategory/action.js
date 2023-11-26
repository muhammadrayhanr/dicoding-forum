const ActionType = {
  SET_FILTER_THREAD_CATEGORY: 'SET_FILTER_THREAD_CATEGORY',
};

function setFilterThreadCategory(category) {
  return {
    type: ActionType.SET_FILTER_THREAD_CATEGORY,
    payload: {
      category,
    },
  };
}

export {
  ActionType,
  setFilterThreadCategory,
};
