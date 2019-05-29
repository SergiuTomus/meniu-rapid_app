import axios from 'axios';
import { GET_PRODUCTS, ADD_TO_CART, EMPTY_CART, EMPTY_PRODUCTS } from './types';
import { API_BASE_URL } from '../../api/config';
import { startLoading, stopLoading } from './loadingActions';

// Get received orders
export const getProducts = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get(`${API_BASE_URL}/client/products/${id}`) // restaurant id
      .then(res => {
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data.category[0]
        });
        dispatch(stopLoading());
      })
      .catch(err => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const emptyProducts = () => {
  return {
    type: EMPTY_PRODUCTS
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
    dispatch(startLoading());
    axios.post(`${API_BASE_URL}/client/order`, order)
      .then(result => {
        dispatch({
          type: EMPTY_CART
        })
        dispatch(stopLoading());
        alert(result.data.message);
      })
      .catch(err => {
        console.log(err);
        dispatch(stopLoading());
        alert("Eroare de server");
      });
  };
};