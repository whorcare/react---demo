// import React from 'react';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from  './common/header/index.js'
import GrobalStyle from './style';
import store from './store'

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Header></Header>
      </Provider>
      <GrobalStyle/>
    </Fragment>
  );
}

export default App;
