import axios from 'axios';
import { GET_PRODUCTS, ADD_TO_CART } from './types';
import { API_BASE_URL } from '../../api/config';

// Get received orders
export const getProducts = (id) => {
  return (dispatch) => {
    axios
      .get(`${API_BASE_URL}/client/products/${id}`) // restaurant id
      .then(res =>
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data.category[0]
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

export const addToCart = () => {
  return {
    type: ADD_TO_CART
  };
}

export const sendOrder = (order) => {
  return (dispatch) => {
    axios.post(`${API_BASE_URL}/client/order`, order)
      .then(result => {
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
}