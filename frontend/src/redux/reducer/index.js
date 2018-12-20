import { combineReducers } from 'redux';
import user_reducer from './user_reducer';
import auth_reducer from './auth_reducer';
import { routerReducer } from 'react-router-redux';
 export default combineReducers({
  user_reducer,
  auth_reducer,
  router: routerReducer
});
