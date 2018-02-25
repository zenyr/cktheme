import { actionize } from '../utils';

const enum ActionTypes {
  ID = 'CK/THEME/INFO/ID',
  NAME = 'CK/THEME/INFO/NAME',
  DARK = 'CK/THEME/INFO/DARK',
  RESET = 'CK/THEME/INFO/RESET',
}

export type State = {
  id: string; // 'mytheme'
  name: string; // 'My awesome theme'
  dark: boolean; // false
};

const initialState: State = {
  id: 'mytheme',
  name: 'My awesome theme',
  dark: false,
};

// Action
interface ThemeInfo {
  Reset: Action<ActionTypes.RESET, string>;
  IdSet: Action<ActionTypes.ID, string>;
  NameSet: Action<ActionTypes.NAME, string>;
  DarkSet: Action<ActionTypes.DARK, boolean>;
}
type Actions = ThemeInfo[keyof ThemeInfo];
// ActionCreator
export const actions = {
  themeInfoReset: actionize<ThemeInfo['Reset']>(ActionTypes.RESET),
  themeInfoIdSet: actionize<ThemeInfo['IdSet']>(ActionTypes.ID),
  themeInfoNameSet: actionize<ThemeInfo['NameSet']>(ActionTypes.NAME),
  themeInfoDarkSet: actionize<ThemeInfo['DarkSet']>(ActionTypes.DARK),
};
// Reducer
export const reducer: Reducer<State, Actions> = (
  state = initialState,
  action
): State => {
  if (action.type === ActionTypes.ID) {
    return { ...state, id: action.payload };
  }
  if (action.type === ActionTypes.NAME) {
    return { ...state, name: action.payload };
  }
  return state;
};
