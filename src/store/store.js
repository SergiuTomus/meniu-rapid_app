import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import restaurantReducer from './reducers/restaurantReducer';
import orderReducer from './reducers/orderReducer';
import loadingReducer from './reducers/loadingReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  restaurantReducer: restaurantReducer,
  orderReducer: orderReducer,
  loadingReducer: loadingReducer
});

const store = () => {
  return createStore(rootReducer, {}, applyMiddleware(thunk));
};

export default store;