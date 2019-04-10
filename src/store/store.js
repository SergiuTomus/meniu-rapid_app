import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import restaurantReducer from './reducers/restaurantReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
  restaurantReducer: restaurantReducer,
  orderReducer: orderReducer
});

const store = () => {
  return createStore(rootReducer, {}, applyMiddleware(thunk));
};

export default store;