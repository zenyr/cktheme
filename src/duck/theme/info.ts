enum ActionTypes {
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
type ThemeInfoIdSet = Action<ActionTypes.ID, string>;
type Actions = ThemeInfoIdSet;
// ActionCreator
export const actions = {
  themeInfoIdSet: (payload: string): ThemeInfoIdSet => ({
    type: ActionTypes.ID,
    payload,
  }),
};
// Reducer
export const reducer: Reducer<State, Actions> = (  state = initialState,  action) => {
  const { payload } = action;
  if (action.type === ActionTypes.ID) {
    return {
      ...state,
      ID: payload,
    };
  }
  return state;
};
