import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReduxState } from 'duck';

type Props = {
  float: ReduxState['ui']['preview']['float'];
  mode: ReduxState['ui']['preview']['mode'];
  data: ReduxState['theme']['data'];
};
export class Previewer extends Component<Props> {
  render() {
    return <div>Preview</div>;
  }
}

export const Connected = connect(
  (state: ReduxState) => ({
    float: state.ui.preview.float,
    mode: state.ui.preview.mode,
    data: state.theme.data,
  }),
  {}
)(Previewer);
