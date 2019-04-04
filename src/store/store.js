import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import restaurantsReducer from './reducers/restaurantReducer';

const rootReducer = combineReducers({
  restaurantsReducer: restaurantsReducer
});

const store = () => {
  return createStore(rootReducer, {}, applyMiddleware(thunk));
};

export default store;