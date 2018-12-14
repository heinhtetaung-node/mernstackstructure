import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import popper from 'popper.js';

/*** Redux ***/
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './redux/store';
/*** *********** ***/

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <App />                
      </ConnectedRouter>
  </Provider>, document.getElementById('root')); 
 registerServiceWorker();
