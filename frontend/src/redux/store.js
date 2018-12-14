import { applyMiddleware, createStore } from 'redux';  // applyMiddleware is middleware for redux action
//import { createLogger } from 'redux-logger'
import reducers from './reducer';
import thunk from 'redux-thunk'  // this is the middleware plugin use to allow async function in redux actions
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
//const myRouterMiddleware = routerMiddleware(history);
export const store = createStore(
reducers, applyMiddleware(thunk));