// import React from 'react';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from  './common/header/index.js'
import GrobalStyle from './style';
import store from './store'

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <div>
          <Header></Header>
          {/* 此处使用路由 */}
          <BrowserRouter>
            <div>
              <Route path='/' exact render={() => <div>home</div>}></Route>
              <Route path='/detail' exact render={() => <div>detail</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
      <GrobalStyle/>
    </Fragment>
  );
}

export default App;
