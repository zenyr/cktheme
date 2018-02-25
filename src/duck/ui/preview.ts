import { actionize } from 'duck/utils';

enum ActionTypes {
  FLOAT = 'CK/UI/PREVIEW/FLOAT',
  MODE = 'CK/UI/PREVIEW/MODE',
}
export const enum PreviewView {
  LIST = 'LIST',
  READ = 'READ',
  MENU = 'MENU',
}
export type State = {
  float: boolean;
  mode: PreviewView;
};

const initialState: State = {
  float: false,
  mode: PreviewView.LIST,
};
// Action
type UiPreviewFloat = Action<ActionTypes.FLOAT, boolean>;
type UiPreviewMode = Action<ActionTypes.MODE, keyof PreviewView>;
type Actions = UiPreviewFloat;
// ActionCreator
export const actions = {
  uiPreviewFloatSet: actionize<UiPreviewFloat>(ActionTypes.FLOAT),
  uiPreviewModeSet: actionize<UiPreviewMode>(ActionTypes.MODE),
};
// Reducer
export const reducer: Reducer<State, Actions> = (
  state = initialState,
  action
): State => {
  const { payload } = action;
  if (action.type === ActionTypes.FLOAT) {
    return { ...state, float: payload };
  }
  return state;
};
