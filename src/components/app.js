import { h, Component } from 'preact';
import '@blueprintjs/core/dist/blueprint.css';
import Header from './header';
import store from '../duck';
import styles from './app.less';
import Previewer from 'async!./Previewer';
import Controller from 'async!./Controller';


import { Provider } from 'react-redux';
import { cz } from '../lib/util';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="app">
          <Header />
          <div className={styles.row}>
            <div className={cz(['pt-card pt-elevation-1',styles.col])}>
              <Previewer />
            </div>
            <div className={cz(['pt-card pt-elevation-1',styles.col])}>
              <Controller />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
