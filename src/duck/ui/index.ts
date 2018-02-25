import {
  actions as previewActions,
  reducer as previewReducer,
  State as PreviewState,
} from './preview';
import { combineReducers } from 'redux';

export const actions = {
  ...previewActions,
};

export const reducer = combineReducers({
  preview: previewReducer,
});

export type State = {
  preview: PreviewState;
};
