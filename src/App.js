import React, { Component } from 'react';
import {Route,BrowserRouter} from 'react-router-dom'
import {Globalstyle} from './style'
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
import {Globalstyleicon} from './static/iconfont/iconfont'
import store from './store'
import {Provider} from 'react-redux'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
                <Globalstyle/>
                <Globalstyleicon/>
                <Header/>
                  <div>
                    <Route path='/'  exact component={Home}/>
                    <Route path='/detail/:id' exact component={Detail}/>
                      <Route path='/login'  exact component={Login}/>
                      <Route path='/write' component={Write}/>
                  </div>
            </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
