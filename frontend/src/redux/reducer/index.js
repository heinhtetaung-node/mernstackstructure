import { combineReducers } from 'redux';
import user_reducer from './user_reducer';
import { routerReducer } from 'react-router-redux';
 export default combineReducers({
  user_reducer,
  router: routerReducer
});
