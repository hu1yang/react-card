import React,{ Fragment } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux'
import { GlobalfontStyle } from './static/iconfont/iconfont'
import store from './store'
import Card from './pages/card'
import { hidden } from '_ansi-colors@3.2.4@ansi-colors';

function App() {
  return (
    <div style={{overflow:'hidden',height:'100%'}}>
      <GlobalStyle />
      <GlobalfontStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Route path='/card' exact component = {Card}></Route>
          </Fragment>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
