import { createStore, combineReducers } from 'redux';

import {
  reducer as themeReducer,
  actions as themeActions,
  State as ThemeState,
} from './theme';
import {
  reducer as uiReducer,
  actions as uiActions,
  State as UiState,
} from './ui';

const reducer = combineReducers({ theme: themeReducer, ui: uiReducer });

export const store = createStore(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const actions = {
  ...themeActions,
  ...uiActions,
};

export type ReduxState = {
  theme: ThemeState;
  ui: UiState;
};
