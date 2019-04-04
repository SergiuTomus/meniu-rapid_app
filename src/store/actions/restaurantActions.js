import axios from 'axios';
import { GET_RESTAURANTS, SELECT_RESTAURANT, GET_RESTAURANT, SHOW_CONTACT } from './types';

// Get restaurants
export const getRestaurants = () => {
  return (dispatch) => {
    axios
      .get(`http://192.168.17.95:3005/client/restaurants`)
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
      .get(`http://localhost:3005/client/restaurants/${id}`)
      .then(res =>
        dispatch({
          type: GET_RESTAURANT,
          payload: res.data
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