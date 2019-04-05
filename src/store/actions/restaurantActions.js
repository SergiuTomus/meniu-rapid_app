import axios from 'axios';
import { GET_RESTAURANTS, SELECT_RESTAURANT, GET_RESTAURANT, SHOW_CONTACT } from './types';
import { API_BASE_URL } from '../../api/config';

// Get restaurants
export const getRestaurants = () => {
  return (dispatch) => {
    axios
      .get(`${API_BASE_URL}/client/restaurants`)
      .then(res =>
        dispatch({
          type: GET_RESTAURANTS,
          payload: res.data.restaurants
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ALL_ORDERS,
          payload: null
        })
      );
  };
};

export const selectRestaurant = (key) => {
  return {
    type: SELECT_RESTAURANT,
    restaurantKey: key
  };
};

// Get restaurant data and categories
export const getRestaurant = (id) => {
  return (dispatch) => {
    axios
      .get(`${API_BASE_URL}/client/restaurants/${id}`)
      .then(res =>
        dispatch({
          type: GET_RESTAURANT,
          payload: res.data.restaurant[0]
        })
      )
      .catch(err =>
        dispatch({
          type: GET_RESTAURANT,
          payload: null
        })
      );
  };
};

export const showContact = () => {
  return {
    type: SHOW_CONTACT
  };
};