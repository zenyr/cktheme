import { combineReducers } from 'redux';
import { prepareActions } from './util';
import data from './Theme.data';

// 테마 값 저장소

const createAction = prepareActions('Theme');

export const id = createAction('id', 'mytheme');
export const name = createAction('name', 'My awesome theme');
export const dark = createAction('dark', false);

export default combineReducers({
  id: id.simpleReducer,
  name: name.simpleReducer,
  dark: dark.simpleReducer,
  data
});
