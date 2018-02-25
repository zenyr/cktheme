import * as React from 'react';
import s from './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from 'comp/GNB';
import { Connected as Previewer } from 'comp/Previewer';
import Views from 'views';
import { Route } from 'react-router';
import { store } from 'duck';
import { Provider } from 'react-redux';
import { Portal } from '@blueprintjs/core';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={s.app}>
            <Route render={p => <Header className={s.top} {...p} />} />
            <div className={s.content}>
              <Views />
            </div>
            <Portal>
              <Previewer />
            </Portal>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
