import React, { Component } from 'react';
import {Route,BrowserRouter} from 'react-router-dom'
import {Globalstyle} from './style'
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail'
import {Globalstyleicon} from './static/iconfont/iconfont'
import store from './store'
import {Provider} from 'react-redux'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
            <Globalstyle/>
            <Header/>
              <BrowserRouter>
                  <div>
                    <Route path='/' exact redirect='/home' component={Home}/>
                    <Route path='/detail' component={Detail}/>
                  </div>
              </BrowserRouter>
            <Globalstyleicon/>
          </div>
      </Provider>
    );
  }
}

export default App;
