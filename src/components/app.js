import { h, Component } from 'preact';
import { FocusStyleManager, NonIdealState } from '@blueprintjs/core';
import { PortalProvider, WhitePortal } from 'react-native-portal';
import { bind } from 'decko';
import '@blueprintjs/core/dist/blueprint.css';
import Header from './header';
import store from '../duck';
import styles from './app.less';
import Previewer from 'async!./Previewer';
import Controller from 'async!./Controller';

import { Provider } from 'react-redux';
import { cz } from '../lib/util';
FocusStyleManager.onlyShowFocusOnTabs();

export default class App extends Component {
  state = { float: true };
  @bind
  toggleFloat() {
    this.setState({ float: !this.state.float });
  }
  render({}, { float }) {
    return (
      <PortalProvider>
        <Provider store={store}>
          <div id="app" className={float ? styles.float : ''}>
            <Header />
            <div className={styles.row}>
              <div
                className={cz([
                  'pt-card pt-elevation-1',
                  styles.col,
                  styles.controller
                ])}
              >
                <Controller float={float} toggleFloat={this.toggleFloat} />
              </div>
              <div
                className={cz([
                  'pt-card pt-elevation-1',
                  styles.col,
                  styles.preview
                ])}
              >
                <Previewer />
              </div>
              <div className={cz([styles.col, styles.dank])}>
                <NonIdealState visual="style" />
              </div>
            </div>
            <WhitePortal name="backCover" />
            <WhitePortal name="picker" />
          </div>
        </Provider>
      </PortalProvider>
    );
  }
}
