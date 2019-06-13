// import React from 'react';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from  './common/header/index.js';
import Home from './pages/home';
import Detail from './pages/detail';
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
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
      <GrobalStyle/>
    </Fragment>
  );
}

export default App;
