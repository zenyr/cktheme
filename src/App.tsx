import * as React from 'react';
import s from './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from 'comp/GNB';
import Views from 'views';
import { Route } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={s.app}>
          <Route render={p => <Header className={s.top} {...p} />} />
          <div className={s.content}>
            <Views />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
