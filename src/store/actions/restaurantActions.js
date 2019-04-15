import axios from 'axios';
import { GET_RESTAURANTS, SELECT_RESTAURANT, GET_RESTAURANT, SHOW_CONTACT, DESELECT_RESTAURANT } from './types';
import { API_BASE_URL } from '../../api/config';
import { startLoading, stopLoading } from './loadingActions';

// Get restaurants
export const getRestaurants = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get(`${API_BASE_URL}/client/restaurants`)
      .then(res => {
        dispatch({
          type: GET_RESTAURANTS,
          payload: res.data.restaurants
        });
        dispatch(stopLoading());
      })
      .catch(err => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const selectRestaurant = (key) => {
  return {
    type: SELECT_RESTAURANT,
    restaurantKey: key
  };
};

export const deselectRestaurant = () => {
  return {
    type: DESELECT_RESTAURANT
  };
};

// Get restaurant data and categories
export const getRestaurant = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get(`${API_BASE_URL}/client/restaurants/${id}`)
      .then(res => {
        dispatch({
          type: GET_RESTAURANT,
          payload: res.data.restaurant[0]
        });
        dispatch(stopLoading());
      })
      .catch(err => {
        dispatch({
          type: GET_RESTAURANT,
          payload: null
        });
        dispatch(stopLoading());
      });
  };
};

export const showContact = () => {
  return {
    type: SHOW_CONTACT
  };
};