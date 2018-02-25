import {
  actions as infoActions,
  reducer as infoReducer,
  State as InfoState,
} from './info';
import {
  actions as dataActions,
  reducer as dataReducer,
  State as DataState,
} from './data';
import { combineReducers } from 'redux';

export const actions = {
  ...infoActions,
  ...dataActions,
};

export const reducer = combineReducers({
  info: infoReducer,
  data: dataReducer,
});

export type State = {
  info: InfoState;
  data: DataState;
};
