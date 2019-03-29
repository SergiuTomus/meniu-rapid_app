import { combineReducers } from 'redux';
import authReducer from './authReducer';
import restaurantReducer from './restaurantReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  order: orderReducer
});