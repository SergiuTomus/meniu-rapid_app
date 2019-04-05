import { GET_RESTAURANTS, SELECT_RESTAURANT, GET_RESTAURANT, SHOW_CONTACT } from '../actions/types';
import { API_BASE_URL } from '../../api/config'

const initialState = {
  restaurants: null,
  selectedRestaurant: null
};

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload.map(item => {
          return {
            key: item.id.toString(),
            name: item.restaurant_name,
            image: `${API_BASE_URL}/${item.image_url}`
          }
        })
      };
    case GET_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: action.payload
      };
    default:
      return state;
  }
};

export default restaurantsReducer;