import { GET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, EMPTY_PRODUCTS } from "../actions/types";

const initialState = {
  products: null,
  product_orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case EMPTY_PRODUCTS:
      return {
        ...state,
        products: null
      };
    case ADD_TO_CART:
      return {
        ...state,
        product_orders: [...state.product_orders, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        product_orders: state.product_orders.filter(product_order => product_order.id !== action.payload)
      };
    case EMPTY_CART:
      return {
        ...state,
        product_orders: []
      };
    default:
      return state;
  }
}