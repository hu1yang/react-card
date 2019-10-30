import React,{ Fragment } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux'
import { GlobalfontStyle } from './static/iconfont/iconfont'
import store from './store'
import Card from './pages/card'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalfontStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Route path='/card' exact component = {Card}></Route>
          </Fragment>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
