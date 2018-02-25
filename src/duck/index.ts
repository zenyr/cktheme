import { createStore, combineReducers } from 'redux';

import { reducer as themeReducer, actions as themeActions } from './theme';

const reducer = combineReducers({ theme: themeReducer });

export const store = createStore(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const actions = {
  ...themeActions,
};
