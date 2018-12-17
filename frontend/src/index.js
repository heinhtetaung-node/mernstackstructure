import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import register from './serviceWorker';
// import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';


/*** Redux ***/
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
import { store } from './redux/store';
/*** *********** ***/


ReactDOM.render(
  	<Provider store={store}>
        <App />                      
  	</Provider>, document.getElementById('root')); 
