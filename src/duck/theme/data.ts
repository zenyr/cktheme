enum ActionTypes {
  SET = 'CK/THEME/DATA/SET',
  RESET = 'CK/THEME/DATA/RESET',
}

type State = {
  barColor: string; // #7ea8bf
  barText: string; // #ffffff
  category: string; // #B8B8B8
  categoryText: string; // #ffffff
  commentColorDefault: string; // #B8B8B8
  commentColorHigh: string; // #ED6F56
  commentColorLow: string; // #78D9BF
  commentColorMedium: string; // #FFBA82
  commentText: string; // #ffffff
  highlightedBackground: string; // #dceef1
  highlightedText: string; // #000000
  like: string; // #ED6F56
  link: string; // #1686e9
  markedBackground: string; // #f6f4d0
  name: string; // #425060
  nameAuthor: string; // #A651BD
  paper: string; // #EFEEE7
  paperAlt: string; // #EAEAE7
  paperAltText: string; // #B8B8B8
  paperLine: string; // #BFBEB8
  paperText: string; // #000000
  primaryAltText: string; // #CCCCCC
  primaryBackground: string; // #425060
  primaryText: string; // #dbdce1
  scrap: string; // #A651BD
  statusBackground: string; // #425060
  statusText: string; // #dbdce1
  time: string; // #afaea5
};

const initialState: State = {
  barColor: '#7ea8bf',
  barText: '#ffffff',
  category: '#B8B8B8',
  categoryText: '#ffffff',
  commentColorDefault: '#B8B8B8',
  commentColorHigh: '#ED6F56',
  commentColorLow: '#78D9BF',
  commentColorMedium: '#FFBA82',
  commentText: '#ffffff',
  highlightedBackground: '#dceef1',
  highlightedText: '#000000',
  like: '#ED6F56',
  link: '#1686e9',
  markedBackground: '#f6f4d0',
  name: '#425060',
  nameAuthor: '#A651BD',
  paper: '#EFEEE7',
  paperAlt: '#EAEAE7',
  paperAltText: '#B8B8B8',
  paperLine: '#BFBEB8',
  paperText: '#000000',
  primaryAltText: '#CCCCCC',
  primaryBackground: '#425060',
  primaryText: '#dbdce1',
  scrap: '#A651BD',
  statusBackground: '#425060',
  statusText: '#dbdce1',
  time: '#afaea5',
};
// Action
type SetParams = { field: keyof State; value: string };
type ResetParams = { field: keyof State };
type ThemeDataSet = Action<ActionTypes.SET, SetParams>;
type ThemeDataReset = Action<ActionTypes.RESET, ResetParams>;
type Actions = ThemeDataSet | ThemeDataReset;
// ActionCreator
export const actions = {
  themeDataSet: (payload: SetParams): ThemeDataSet => ({
    type: ActionTypes.SET,
    payload,
  }),
  themeDataReset: (payload: ResetParams): ThemeDataReset => ({
    type: ActionTypes.RESET,
    payload,
  }),
};
// Reducer
export const reducer: Reducer<State, Actions> = (
  state = initialState,
  action
) => {
  if (action.type === ActionTypes.SET) {
    const { field, value } = action.payload;
    return {
      ...state,
      [field]: value,
    };
  }
  if (action.type === ActionTypes.RESET) {
    const { field } = action.payload;
    return {
      ...state,
      [field]: initialState[field],
    };
  }
  return state;
};
