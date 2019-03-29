import axios from 'axios';
import { GET_PRODUCTS } from './types';

// Get received orders
export const getProducts = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3005/client/products/${id}`) // restaurant id
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