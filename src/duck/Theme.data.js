import { combineReducers } from 'redux';
import { prepareActions } from './util';

// 테마 값 저장소

const createAction = prepareActions('ThemeData');

export const paper = createAction('paper', '#EFEEE7');
export const paperAlt = createAction('paperAlt', '#EAEAE7');
export const paperLine = createAction('paperLine', '#BFBEB8');
export const paperText = createAction('paperText', '#000000');
export const paperAltText = createAction('paperAltText', '#B8B8B8');
export const primaryBackground = createAction('primaryBackground', '#425060');
export const primaryText = createAction('primaryText', '#dbdce1');
export const primaryAltText = createAction('primaryAltText', '#CCCCCC');
export const statusBackground = createAction('statusBackground', '#425060');
export const statusText = createAction('statusText', '#dbdce1');
export const highlightedBackground = createAction(
  'highlightedBackground',
  '#BBDBE0'
);
export const highlightedText = createAction('highlightedText', '#000000');
export const name = createAction('name', '#425060');
export const nameAuthor = createAction('nameAuthor', '#A651BD');
export const commentText = createAction('commentText', '#ffffff');
export const commentColorDefault = createAction(
  'commentColorDefault',
  '#B8B8B8'
);
export const commentColorLow = createAction('commentColorLow', '#78D9BF');
export const commentColorMedium = createAction('commentColorMedium', '#FFBA82');
export const commentColorHigh = createAction('commentColorHigh', '#ED6F56');
export const link = createAction('link', '#1686e9');
export const category = createAction('category', '#B8B8B8');
export const categoryText = createAction('categoryText', '#ffffff');
export const scrap = createAction('scrap', '#A651BD');
export const time = createAction('time', '#afaea5');
export const barColor = createAction('barColor', '#7ea8bf');
export const barText = createAction('barText', '#ffffff');
export const markedBackground = createAction('markedBackground', '#f6f4d0');
export const like = createAction('like', '#ED6F56');

export default combineReducers({
  barColor: barColor.simpleReducer,
  barText: barText.simpleReducer,
  category: category.simpleReducer,
  categoryText: categoryText.simpleReducer,
  commentColorDefault: commentColorDefault.simpleReducer,
  commentColorHigh: commentColorHigh.simpleReducer,
  commentColorLow: commentColorLow.simpleReducer,
  commentColorMedium: commentColorMedium.simpleReducer,
  commentText: commentText.simpleReducer,
  highlightedBackground: highlightedBackground.simpleReducer,
  highlightedText: highlightedText.simpleReducer,
  like: like.simpleReducer,
  link: link.simpleReducer,
  markedBackground: markedBackground.simpleReducer,
  name: name.simpleReducer,
  nameAuthor: nameAuthor.simpleReducer,
  paper: paper.simpleReducer,
  paperAlt: paperAlt.simpleReducer,
  paperAltText: paperAltText.simpleReducer,
  paperLine: paperLine.simpleReducer,
  paperText: paperText.simpleReducer,
  primaryAltText: primaryAltText.simpleReducer,
  primaryBackground: primaryBackground.simpleReducer,
  primaryText: primaryText.simpleReducer,
  scrap: scrap.simpleReducer,
  statusBackground: statusBackground.simpleReducer,
  statusText: statusText.simpleReducer,
  time: time.simpleReducer
});
