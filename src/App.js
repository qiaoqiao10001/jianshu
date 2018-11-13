import React, { Component } from 'react';
import {Globalstyle} from './style'
import Header from './common/header/index'
import {Globalstyle_icon} from './static/iconfont/iconfont'
import store from './store'
import {Provider} from 'react-redux'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
            <Globalstyle/>
            <Header/>
            <Globalstyle_icon/>
          </div>
      </Provider>
    );
  }
}

export default App;
