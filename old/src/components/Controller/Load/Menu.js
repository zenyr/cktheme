import { h, Component } from 'preact';
import styles from '../style.less';
import { bind } from 'decko';
import { cz } from '../../../lib/util';
import CODES from './codes';

import { Menu, MenuItem } from '@blueprintjs/core';

export default class LoadControllerMenu extends Component {
  @bind
  handleClick(name) {
    return () => this.props.onChange(CODES[name]);
  }
  render() {
    return (
      <Menu className={cz(['pt-card pt-elevation-2', styles.dropup])}>
        {Object.keys(CODES).map(name =>
          <MenuItem iconName="document-open" onClick={this.handleClick(name)} text={name} />
        )}
      </Menu>
    );
  }
}
