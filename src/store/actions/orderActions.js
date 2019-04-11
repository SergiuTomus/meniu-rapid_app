import axios from 'axios';
import { GET_PRODUCTS, ADD_TO_CART, EMPTY_CART } from './types';
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

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART
  };
};


export const sendOrder = (order) => {
  return (dispatch) => {
    axios.post(`${API_BASE_URL}/client/order`, order)
      .then(result => {
        console.log(result.data);
        return dispatch({
          type: EMPTY_CART
        })
      })
      .catch(err => {
        console.log(err);
      });
  };
};