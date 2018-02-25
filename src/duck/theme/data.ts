enum ActionTypes {
  SET = 'CK/THEME/DATA/SET',
  RESET = 'CK/THEME/DATA/RESET',
  UNDO = 'CK/THEME/DATA/UNDO',
  REDO = 'CK/THEME/DATA/REDO',
}

type State = ThemeData & {
  history: SetParams[];
  historyIdx: number;
};

const initialState: State = {
  history: [],
  historyIdx: -1,
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
type SetParams = { field: keyof ThemeData; value: string };
type ResetParams = { field: keyof ThemeData };
type ThemeDataSet = Action<ActionTypes.SET, SetParams>;
type ThemeDataReset = Action<ActionTypes.RESET, ResetParams>;
type ThemeDataUndo = Action<ActionTypes.UNDO>;
type ThemeDataRedo = Action<ActionTypes.REDO>;
type Actions = ThemeDataSet | ThemeDataReset | ThemeDataUndo | ThemeDataRedo;
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
  if (action.type === ActionTypes.SET || action.type === ActionTypes.RESET) {
    const { field } = action.payload;
    const oldValue = state[field];
    if (
      action.type === ActionTypes.RESET ||
      action.payload.value !== oldValue
    ) {
      // save history
      const history = [...state.history, { field, value: oldValue }];
      const historyIdx = history.length - 1;
      return {
        ...state,
        history,
        historyIdx,
        [field]:
          action.type === ActionTypes.RESET
            ? initialState[field]
            : action.payload.value,
      };
    }
  }
  if (action.type === ActionTypes.UNDO || action.type === ActionTypes.REDO) {
    // overwrite by history index
    const isBackward = action.type === ActionTypes.UNDO;
    const { history, historyIdx } = state;
    const nextIdx = historyIdx + (isBackward ? -1 : 0);
    const nextData = history[nextIdx];
    if (nextData) {
      return {
        ...state,
        historyIdx: nextIdx,
        [nextData.field]: nextData.value,
      };
    }
  }
  return state;
};
