import {
  combineReducers,
  applyMiddleware,
  createStore,
  compose,
  bindActionCreators
} from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import Theme, * as ThemeActions from './Theme';
import * as ThemeDataActions from './Theme.data';

const reducer = combineReducers({
  Theme
});

export const Actions = {
  Theme: ThemeActions,
  ThemeData: ThemeDataActions
};
let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
}

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, promise))
);

export const autoBind = actionCreators => dispatch =>
  bindActionCreators(actionCreators, dispatch);

export { bindActionCreators, connect };
