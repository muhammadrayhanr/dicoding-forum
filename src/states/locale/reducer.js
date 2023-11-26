import { ActionType } from './action';

function localeReducer(locale = 'id', action = {}) {
  switch (action.type) {
    case ActionType.SET_LOCALE:
      return action.payload.locale;
    default:
      return locale;
  }
}

export default localeReducer;
