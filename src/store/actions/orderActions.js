import axios from 'axios';
import { GET_PRODUCTS } from './types';
import { API_BASE_URL } from '../../api/config';

// Get received orders
export const getProducts = (id) => {
  return (dispatch) => {
    axios
      .get(`${API_BASE_URL}/client/products/${id}`) // restaurant id
      .then(res =>
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PRODUCTS,
          payload: null
        })
      );
  };
};