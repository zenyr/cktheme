import { actions as infoActions, reducer as infoReducer } from './info';
import { actions as dataActions, reducer as dataReducer } from './data';
import { combineReducers } from 'redux';

export const actions = {
  ...infoActions,
  ...dataActions,
};

export const reducer = combineReducers({
  info: infoReducer,
  data: dataReducer,
});
