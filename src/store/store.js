import { createStore, combineReducers } from 'redux';
import restaurantsReducer from './reducers/restaurants';

const rootReducer = combineReducers({
  restaurantsReducer: restaurantsReducer
});

const store = () => {
  return createStore(rootReducer);
};

export default store;