import { Component } from 'preact';
import { connect } from '../../duck';
import { bind } from 'decko';

import ViewAuto from './ViewAuto';

// 미리보기
const stateSelector = state => ({ colors: state.Theme.data });
@connect(stateSelector, {})
export default class Previewer extends Component {
  state = { mode: 'read' };
  @bind
  handleToggleMode() {
    const { mode: oldMode } = this.state;
    const mode =
      oldMode === 'menu' ? 'list' : oldMode === 'list' ? 'read' : 'menu';
    this.setState({ mode });
  }
  render({ colors }, { mode }) {
    return (
      <ViewAuto
        mode={mode}
        colors={colors}
        toggleMode={this.handleToggleMode}
      />
    );
  }
}
