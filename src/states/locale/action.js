const ActionType = {
  SET_LOCALE: 'SET_LOCALE',
};

function setLocale(locale) {
  return {
    type: ActionType.SET_LOCALE,
    payload: {
      locale,
    },
  };
}

export {
  ActionType,
  setLocale,
};
