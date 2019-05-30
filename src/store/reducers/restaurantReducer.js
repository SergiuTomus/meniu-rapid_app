import { GET_RESTAURANTS, GET_RESTAURANT, DESELECT_RESTAURANT } from '../actions/types';
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
            minimum_order: item.minimum_order,
            cost_delivery: item.cost_delivery,
            image: `${API_BASE_URL}/${item.image_url}`
          }
        })
      };
    case GET_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: action.payload
      };
    case DESELECT_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: null
      };
    default:
      return state;
  }
};

export default restaurantsReducer;